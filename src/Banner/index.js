import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native"
import banner from '../../assets/img/banner.png'

const width = Dimensions.get('screen').width

const Banner = () => {
    return <>
        <Image source={banner} style={styles.topo} />
        <Text style={styles.titulo}>Esse é o nosso titulo</Text>
    </>
}


const styles = StyleSheet.create({
    topo: {
        maxWidth: "100%",
        height: width
    },

    titulo: {
        position: "absolute",
        top: 0,
        color: "white",
    }
})




export default Banner