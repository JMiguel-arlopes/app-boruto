import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Texto from "../../../componentes/Texto";

const Itens = ({ titulo, lista }) => {
    return <>
        <Texto style={styles.titulo}>{titulo}</Texto>
        {lista.map(({ nome, img }) => {
            return <View style={styles.row} key={nome}>
                <Image style={styles.img} source={img} />
                <Texto style={styles.nome} >{nome}</Texto>
            </View>
        })}
    </>
}

const styles = StyleSheet.create({
    titulo: {
        // textAlign: "center",
        marginTop: 16,
        fontSize: 18,
        fontWeight: 'bold',
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ACACAC",
        paddingVertical: 16,
        marginHorizontal: 16,
    },

    img: {
        width: 48,
        height: 48,
        borderRadius: 100
    },

    nome: {
        fontSize: 16,
        lineHeight: 24,
        color: "#666",
        marginLeft: 12
    },
})

export default Itens