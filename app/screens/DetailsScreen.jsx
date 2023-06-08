import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { getBackgroundColor, getTypeColor } from "../utils/colorUtils";

const DetailsScreen = ({ navigation, route }) => {
    const data = route.params.details
    console.log(data)
    return (
        <ScrollView style={styles.scroll}>
            <Image
                source={{ uri: data.image }}
                style={[styles.image, { backgroundColor: getBackgroundColor(data.types[0]) }]}
            />
            <Pressable style={styles.backBtnContainer} onPress={() => navigation.goBack()}>
                <Image
                    style={styles.backBtn}
                    source={require('../assets/back.png')}
                />
            </Pressable>

            <View style={styles.titleContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <View style={styles.typesContainer}>
                    {
                        data.types.map((type, index) => (
                            <View key={index} style={{ paddingRight: 10 }} >
                                <Text style={[styles.type, { backgroundColor: getTypeColor(type) }]}>{type}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: '#f5f5f7'
    },
    image: {
        height: 260,
        resizeMode: 'contain',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    backBtnContainer: {
        top: 10,
        left: 10,
        position: 'absolute'
    },
    backBtn: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    titleContainer: {
        height: 50,
        margin: 20,
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 20,
        color: '#1d1d1f',
        fontWeight: "500",
        textTransform: "capitalize",
    },
    typesContainer: {
        width: '55%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    type: {
        width: 80,
        height: 30,
        fontSize: 14,
        color: '#1d1d1f',
        textAlign: 'center',
        fontWeight: '500',
        borderRadius: 12,
        textAlignVertical: 'center',
        textTransform: "capitalize"
    }
})