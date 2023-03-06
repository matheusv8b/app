import React,{useState} from "react";
import {View,Text,ScrollView, RefreshControl} from "react-native";

export default function(){

    const [atualizando,setAtualizando]=useState(false)
    const aoAtualizar=()=>{
        setAtualizando(true);

        //Código de atualização
        setTimeout(()=>{setAtualizando(false)},3000); //Somente para avisualizar

        //setAtualizando(false) - Para atualizações
    }


    return(
        <View style={{flex:1}}>
            <ScrollView 
                style={{backgroundColor:"#333",padding:15}}
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={aoAtualizar}
                    />
                }
            >
                <Text style={{color:"red"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.

Curabitur porttitor, elit sit amet interdum blandit, lacus ex commodo odio, ut egestas ante nisl ut sem. Vestibulum porta nisi eu interdum porta. Morbi vitae nisi in dolor gravida.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo hendrerit, euismod tortor egestas, laoreet erat. Suspendisse tempor ultrices sem, sit amet egestas mauris euismod semper. Sed luctus vehicula eleifend. Sed ac scelerisque velit, ac volutpat dolor. Ut sit amet blandit nunc. Vestibulum a nulla ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at diam ut enim eleifend laoreet porta eget tortor. Nulla facilisi.
                </Text>
            </ScrollView>
        </View>
    )
}