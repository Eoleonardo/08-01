import { Text, StyleSheet, SafeAreaView } from "react-native";
import { Card } from 'react-native-paper';
import { useState, useEffect } from "react";
import Produto from "../services/Produto";

export default function Consultar() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const buscar = async () => {
            const lista = await Produto.findAll();
            setProdutos(lista);
        }
        buscar();
    }, [])

    return (
    <SafeAreaView style={styles.container}>
        { produtos?.map((pdt)=> (
            <Card key={pdt.id}>
                <Text style={styles.paragraph}>{pdt.nome_produto}</Text>
                <Text style={styles.paragraph}>{pdt.valor}</Text>
            </Card>
        ))}
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});