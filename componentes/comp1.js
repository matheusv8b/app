import React from 'react';
import {StyleSheet, Text} from 'react-native';
import MeusEstilos from '../estiloscss/Estilos.js'


export default function comp1(props){
    return(
        <Text style={MeusEstilos.textoApp}>Prefeitura de Toledo - {props.Prefeitura}</Text>
    )
}

