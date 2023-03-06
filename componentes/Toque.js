import React,{useState} from "react";
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';
import { Linking } from "react-native";

export default function() {

    const[cont,setCont]=useState(0)

    const contar=()=>{
        setCont(cont + 1)
    }

    return(
        <View>
            <TouchableHighlight
                style={estilos.botao}
                onPress={contar}
                underlayColor="#008080"
            >
                <Text style={{color:"white"}}>Acesse o SITE</Text>
            </TouchableHighlight>
            <Text>{cont}</Text>
        </View>
    )
}

const estilos=StyleSheet.create({
    botao:{
        alignItems:"center",
        backgroundColor:"green",
        padding:10,
    }
})