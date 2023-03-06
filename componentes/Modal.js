import React, {useState} from "react";
import {View,Text,Button,Modal,StyleSheet} from "react-native";

export default function(){

    const [visivel,setVisivel]=useState(true)

    return(
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visivel}
                style={{}}
            >
                <View style={estilos.modal}>
                    <Text style={estilos.textomodal}>Acesse Nosso APP</Text>
                    <Text style={estilos.textomodal}>Prefeitura</Text>
                    <Button
                        title="Fechar"
                        onPress={()=>{setVisivel(false)}}
                        />
                </View>               
            </Modal>
            <Button
                title="Abrir"
                onPress={()=>{setVisivel(true)}}
            />
        </View>
    )
}


const estilos=StyleSheet.create({
    modal:{
        backgroundColor:"green",
        margin:20,
        padding:20,
        borderRadius:20,
        elevation:10
    },
    textomodal:{
        color:"white"
    }
})
