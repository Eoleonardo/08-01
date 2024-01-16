import { SafeAreaView, TextInput, Button, StyleSheet } from "react-native";
import Produto from "../services/Produto";
import { useState } from "react";
import { Card } from 'react-native-paper';

export default function Cadastrar(){
    const [produtos, setProdutos] = useState({
       nome_produto: 'Pão',
        valor: 10
    });
    const cadastrar = () => {
        Produto.create(produtos);
    }
   
    return(
  <SafeAreaView style={styles.container}>
    <Card.Content>
           <TextInput
           
            onChange={(texto)=> 
            {setProdutos({...produtos, nome_produto: texto})}}></TextInput>

           <TextInput
           
            onChange={(texto)=> 
            {setProdutos({...produtos, valor: texto})}}></TextInput>
            
       <Button title="cadastrar" onPress={cadastrar}>SALVAR</Button>
    </Card.Content>
  </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#eeeeee',
        padding:8
    }
})