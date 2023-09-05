import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native"
import banner from '../../assets/img/banner.png'

const width = Dimensions.get('screen').width

const Banner = () => {
    return <Image source={banner} style={styless.topo} />
}


const styless = StyleSheet.create({
    topo: {
        maxWidth: "100%",
        height: width
    }
})




export default Banner