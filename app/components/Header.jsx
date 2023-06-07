import React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'

const Header = ({ headerText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{headerText}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#4f2ccd",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        elevation: 16,
        shadowOpacity: 0.23,
        shadowRadius: 12.81,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500'
    }
})