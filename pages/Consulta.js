import { View, Text } from "react-native-web";

export default function Consultar(){
    const lista = [
        {
            nomeP:'camiseta',
            valor:'100'
        },
        {
            nomeP:'calca',
            valor:'200'
        },
        {
            nomeP:'bone',
            valor:'50'
        }
];
    return(
    <View>
        {lista?.map((roupas)=>
        <Text>
        {roupas.nomeP} {roupas.valor}
        </Text>
        )}
    </View>
    )
};