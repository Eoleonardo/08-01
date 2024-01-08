import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Casa from "./pages/Casa";
import Consulta from "./pages/Consulta";
import Cadastrar from "./pages/Cadastrar";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator inititalRouteName = "casa">
       <Stack.Screen name="CASA" component={Casa}></Stack.Screen>
       <Stack.Screen name="Consultar" component={Consulta}></Stack.Screen>
       <Stack.Screen name="Cadastrar" component={Cadastrar}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  

  )
};
    /*<View style={inicio.container}>
      <Text style={inicio.paragrafo}>Ola mundo 40%</Text>
      <Text style={meio.paragrafo}>Meu nome e Leonardo 70%</Text>
      <Text style={fim.paragrafo}>Faço o curso de info 100%</Text>
    </View>
  )
};

const inicio = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor:'black',
  justifyContent:'center',
  border:"solid 2px white"
  },
  paragrafo:{
    color:'white',
    border:"solid 1px white",
    padding: '18px',
    width:"40%"
  }
});

const meio = StyleSheet.create({
  paragrafo:{
    color:'white',
    border:"solid 1px white",
    padding: '18px',
    width:"70%"
  }
});

const fim = StyleSheet.create({
  paragrafo:{
    color:'white',
    border:"solid 1px white",
    padding: '18px',
    width:"100%"
  }
});*/



