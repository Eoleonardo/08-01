import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { Card, TextInput, Button } from "react-native-paper";
import Produto from "../services/Produto";
import Toast from "react-native-toast-message";

export default function Cadastrar({ navigation }) {
  const [produtos, setProdutos] = useState({
    nome_produto: "",
    valor: 0,
  });
  const cadastrar = () => {
    if (produtos.nome_produto === "") {
      return Toast.show({
        type: "error",
        text1: "Notificação",
        text2: "infome o nome!",
        visibilityTime: 3000,
      });
    }
    Produto.create(produtos);
    navigation.navigate("Consultar");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card.Content>
        <Text>Oláooooo</Text>
        <TextInput
          label="nome do produto"
          onChangeText={(texto) => {
            setProdutos({ ...produtos, nome_produto: texto });
          }}
        ></TextInput>

        <TextInput
          label="valor do produto"
          onChangeText={(texto) => {
            setProdutos({ ...produtos, valor: texto });
          }}
        ></TextInput>

        <Button title="cadastrar" onPress={cadastrar}>
          cadastrar
        </Button>
      </Card.Content>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    padding: 8,
  },
});
