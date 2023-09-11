import React from "react";
import { StyleSheet, Text } from 'react-native'

export default function Texto({ children }) {
    return <Text style={styles.texto}>{children}</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "poppins"
    }
})