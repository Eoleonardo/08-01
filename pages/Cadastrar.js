import { SafeAreaView, TextInput, Button } from "react-native";
import Produto from "../services/Produto";
import { useState } from "react";

export default function Cadastrar(){
    const [produto, setProduto] = useState({
        nomeProduto:'Pão',
        valor: 10
    });
    const cadastrar = () => {
        Produto.create(produto);
    }
   
    return(
  <SafeAreaView style={styles.container}>
    <Card.container>
           <TextInput
            value={produto.nomeProduto}
            onChange={(texto)=> 
            {setProduto({...produto, nomeProduto: texto})}}/>

           <TextInput
            value={produto.valor}
            onChange={(texto)=> 
            {setProduto({...produto, valor: texto})}}/>
       <Button title="cadastrar" onPress={cadastrar}>SALVAR</Button>
    </Card.container>
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