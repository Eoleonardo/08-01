import { Button } from "react-native";
import { View, Text } from "react-native";

export default function Casa({navigation}){
    return(
    <View>
 
            <Button 
            title="Consultar" 
            onPress={()=> navigation.navigate('Consultar')}
            />

            <Button 
            title="Cadastrar" 
            onPress={()=> navigation.navigate('Cadastrar')}
            />
   
    </View>
    )
};