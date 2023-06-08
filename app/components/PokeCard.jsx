import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { getTypeColor, getBackgroundColor } from '../utils/colorUtils';

const PokeCard = ({ data, navigation }) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('Details', { details: data })}
            style={[styles.card, { backgroundColor: getBackgroundColor(data.types[0]) }]}  >
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
        width: '47%',
        borderRadius: 10,
    },
    box: {
        padding: 5,
        opacity: 0.85,
        borderRadius: 16,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
        color: '#1d1d1f',
        textAlign: 'center',
        fontWeight: "500",
        textTransform: "capitalize",
    },
    image: {
        height: 140,
        marginBottom: 20,
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
        fontSize: 14,
        color: '#1d1d1f',
        textAlign: 'center',
        fontWeight: '500',
        borderRadius: 12,
        textTransform: "capitalize"
    }
})