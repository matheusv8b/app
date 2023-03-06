
//import React, { Component } from 'react';
import 'react-native-gesture-handler';
import React,{useState} from 'react';
import {Text,StyleSheet,Button,View,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Estilos from './estiloscss/Estilos.js';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Gavetas=createDrawerNavigator();

function TelaHome({navigation}:any){
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>Tela Principal</Text>
      <Text>Toledo App</Text>
    </View>
  );
}

function TelaCanal({navigation}:any){
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>Tela Canal</Text>
      <Text>Site Prefeitura</Text>
    </View>
  );
}

function TelaCursos({navigation}:any){
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>Tela Cursos</Text>
      <Text>Toledo App</Text>
    </View>
  );''
}


export default function App1(){
  return (
    <NavigationContainer>
      <Gavetas.Navigator>
        <Gavetas.Screen
          name="Home"
          component={TelaHome}
          options={{
            title:"Tela Inicial",
            headerStyle:{
              backgroundColor:"green"
            },
            headerTintColor:"#fff",
            headerRight:()=>(
              <Button
                title='Cursos'
                color='#000'
                onPress={()=>Alert.alert('Aqui Você vera Nossos Cursos Disponiveis')}
              />
            ),
          }}
        />
        <Gavetas.Screen
          name="Canal"
          component={TelaCanal}
          options={{title:"Tela Canal",
          headerStyle:{
            backgroundColor:"green"
          },
          headerTintColor:"#fff"}}
        />
        <Gavetas.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title:"Cursos Grátis",
          headerStyle:{
            backgroundColor:"green"
          },
          headerTintColor:"#fff"}}
        />
      </Gavetas.Navigator>
    </NavigationContainer>
  );
};



const estilos = StyleSheet.create({

botao: {
    backgroundColor:"green"
}
})




/*export default class App1 extends Component{
  render(){
    return(
      <View> 
      <View>
        <Text>APP Prefeitura</Text>
      </View>
      <View>
        <Text>Toledo 2023</Text>
        <Text>www.toledo.pr.gov.br</Text>
      </View>
    </View>
    );
  }
}
*/
