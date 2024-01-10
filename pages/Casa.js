import { View, StyleSheet, Button } from "react-native";

export default function Casa({navigation}){
    return(
    <View style={styles.container}>
 
            <Button 
            color="black"
            title="Consultar" 
            onPress={()=> navigation.navigate('Consultar')}
            />
            <View  style={styles.espaco}/>
            <Button 
            color="black"
            title="Cadastrar" 
            onPress={()=> navigation.navigate('Cadastrar')}
            />
    
    </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#eeeeee',
        padding:2
    },
    espaco:{
     height:5
    }
})