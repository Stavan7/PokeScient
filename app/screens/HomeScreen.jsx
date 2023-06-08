import React, { useState, useEffect } from "react";
import {
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import { fetchPokemonData, fetchPokemonList } from "../api/pokeApi";

const HomeScreen = ({ }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPokemon = async () => {
        try {
            const pokemonList = await fetchPokemonList();
            const pokemonWithImages = await Promise.all(
                pokemonList.map(async (pokemon) => {
                    const pokemonData = await fetchPokemonData(pokemon.url);
                    const types = pokemonData.types.map((type) => type.type.name);
                    const moves = pokemonData.moves.map((move) => move.move.name);
                    return {
                        name: pokemon.name,
                        image: pokemonData.sprites.other.home.front_default,
                        moves: moves,
                        types: types
                    };
                })
            );
            setData(pokemonWithImages);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchPokemon();
    }, []);

    if (isLoading) {
        return <ActivityIndicator
            size="large"
            color="black"
            style={styles.activity}
        />;
    }

    return (
        <View style={styles.container}>
            <Header headerText={'POKE`SCIENT'} />
            <FlatList
                data={data}
                numColumns={2}
                initialNumToRender={20}
                progressViewOffset={100}
                maxToRenderPerBatch={8}
                removeClippedSubviews={true}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={styles.columnWrapper}
                renderItem={({ item }) => <PokeCard data={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        fontSize: 26,
        color: '#000',
        fontWeight: '500'
    },
    columnWrapper: {
        margin: 10,
        justifyContent: 'space-between'
    },
    activity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;