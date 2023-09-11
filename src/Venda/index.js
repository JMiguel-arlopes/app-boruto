import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import konoha from "../../assets/img/konoha.jpg"

const Venda = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Titulo da coisa</Text>
            <View style={styles.row}>
                <Image source={konoha} style={styles.img} />
                <Text style={styles.subtitulo}>Industria</Text>
            </View>
            <Text style={styles.descricao}>
                lorem impsum lorem impsum lorem impsum lorem impsum
                lorem impsum lorem impsum lorem impsum lorem impsum
                lorem impsum lorem impsum lorem impsum lorem impsum
                lorem impsum lorem impsum lorem impsum lorem impsum
                lorem impsum lorem impsum lorem impsum lorem impsum</Text>
            <Text style={styles.preco}>R$ 40,00</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    titulo: {
        color: "black",
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 35,
        fontFamily: "poppins"
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
        fontFamily: "poppins"
    },
    preco: {
        color: "darkgreen",
        fontSize: 28,
        fontWeight: "700",
        marginTop: 5
    }
})

export default Venda