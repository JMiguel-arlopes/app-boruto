import React from "react";
import { StyleSheet, Text } from 'react-native'

export default function Texto({ children, style }) {
    let estilo = styles.texto

    if (style?.fontWeight == 'bold') {
        estilo = styles.negrito
    }
    return <Text style={[style, estilo]}>{children}</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "jostRegular",
        fontWeight: "normal"
    },
    negrito: {
        fontFamily: "jostBold",
        fontWeight: 'normal'
    }
})