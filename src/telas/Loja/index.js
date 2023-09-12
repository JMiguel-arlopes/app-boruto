import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Banner from './componentes/Banner'
import Detalhes from './componentes/Venda'
import Itens from "./componentes/Itens";

const Loja = ({ banner, venda, itens }) => {
    return <ScrollView>
        <Banner {...banner} />
        <View style={styles.container}>
            <Detalhes {...venda} />
            <Itens {...itens} />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})

export default Loja
