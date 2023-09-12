import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import Texto from '../../../componentes/Texto'

const Detalhes = ({ titulo, img, subtitulo, descricao, preco, botao }) => {
    return <>
        <Texto style={styles.titulo}>{titulo}</Texto>
        <View style={styles.row}>
            <Image source={img} style={styles.img} />
            <Texto style={styles.subtitulo}>{subtitulo}</Texto>
        </View>
        <Texto style={styles.descricao}>{descricao}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <TouchableOpacity style={styles.botao}>
            <Texto style={styles.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}


const styles = StyleSheet.create({
    titulo: {
        color: "black",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 35,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5
    },
    img: {
        width: 32,
        height: 32
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 5
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 14,
        fontWeight: "500",
    },
    preco: {
        color: "darkgreen",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 5
    },
    botao: {
        marginTop: 12,
        backgroundColor: "#459090",
        paddingVertical: 12,
        borderRadius: 8,
        textAlign: "center"
    },
    textoBotao: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    }
})

export default Detalhes