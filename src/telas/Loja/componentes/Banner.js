import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native"
import banner from '../../../../assets/img/banner.png'

const width = Dimensions.get('screen').width

const Banner = () => {
    return (
        <View style={styles.container}>
            <Image source={banner} style={styles.topo} />
            <Text style={styles.titulo}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },

    topo: {
        maxWidth: "100%",
        height: width
    },

    titulo: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        color: "blue",
        fontSize: 16,
        fontWeight: "bold",
        padding: 16,
    }
})

export default Banner
