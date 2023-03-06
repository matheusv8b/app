import React from 'react'
import {View,Text,FlatList, StyleSheet, SafeAreaView} from 'react-native'

const produtos=[
    {
        id:'001',
        desc:['Mouse','25.00R$']
    },
    {
        id:'002',
        desc:['Teclado','55.00R$']
    },
    {
        id:'003',
        desc:['Fone','250.00R$']
    },
    {
        id:'004',
        desc:['Monitor','2000.00R$']
    },
    {
        id:'005',
        desc:['Gabinete','600.00R$']
    },
    {
        id:'006',
        desc:['Gabinete','600.00R$']
    },
    {
        id:'007',
        desc:['Gabinete','600.00R$']
    },
    {
        id:'008',
        desc:['Gabinete','400.00R$']
    },
    {
        id:'009',
        desc:['Gabinete','500.00R$']
    },
    {
        id:'010',
        desc:['Gabinete','550.00R$']
    },
    {
        id:'011',
        desc:['Gabinete','550.00R$']
    },
    {
        id:'012',
        desc:['Gabinete','550.00R$']
    },
    {
        id:'013',
        desc:['Gabinete','950.00R$']
    },
    {
        id:'014',
        desc:['Gabinete','100.00R$']
    },
]

export default function(){
    return(
        <View style={{marginBottom:80}}>
            <FlatList
                data={produtos}
                keyExtractor={item=>item.id}
                renderItem={({item})=><View style={estilos.item}><Text style={estilos.prod}>Descrição:{item.desc[0]} - Valor:{item.desc[1]} </Text></View>}
            />
        </View>
    )
}


const estilos=StyleSheet.create({
    item:{
        backgroundColor:'#008',
        padding:15,
        marginVertical:8,
        marginHorizontal:16,
    },
    prod:{
        fontSize:15,
        color:'#fff'
    }
})