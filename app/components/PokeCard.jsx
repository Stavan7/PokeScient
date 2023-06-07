import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { getTypeColor } from '../utils/colorUtils';

const PokeCard = ({ data }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.card,
            {
                backgroundColor: getTypeColor(data.types[0]),
                shadowColor: getTypeColor(data.types[0])
            }]}
        >
            <Text style={styles.name}>{data.name}</Text>
            <Image
                style={styles.image}
                source={{ uri: data.image }}
            />
            <View style={styles.typesContainer}>
                {
                    data.types.map((type, index) => (
                        <View key={index} >
                            <Text style={[styles.type, { backgroundColor: getTypeColor(type) }]}>{type}</Text>
                        </View>
                    ))
                }
            </View>
        </TouchableOpacity>
    )
}

export default PokeCard

const styles = StyleSheet.create({
    card: {
        padding: 5,
        opacity: 0.75,
        width: '47%',
        borderRadius: 10,
        shadowOffset: {
            width: 20,
            height: 30
        },
        backfaceVisibility: 'visible',
        shadowOpacity: 0.57,
        shadowRadius: 14,
        elevation: 23,
    },
    box: {
        padding: 5,
        opacity: 0.85,
        borderRadius: 16,
    },
    name: {
        fontSize: 16,
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: "500",
        textTransform: "capitalize",
    },
    image: {
        height: 140,
        resizeMode: 'contain'
    },
    typesContainer: {
        flexDirection: "row",
        marginBottom: 10,
        marginHorizontal: 5,
        justifyContent: 'space-between',
    },
    type: {
        width: 70,
        padding: 5,
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        borderRadius: 16,
        textTransform: "capitalize"
    }
})