import React,{useEffect, useState} from "react";
import { View,Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import api from '../api/api';
export default function Rotas (){
    const[rotas,setRotas]=useState([]);
    const[carregando,setCarregando]=useState(true);
    const navigation=useNavigation();
    const getRotas = async () =>{
    try{
         await api.get("/rotas").then((response)=>{
            console.log(response.data);
            setRotas(response.data);
           })
    }catch(error){(alert('Erro ao obter Rotas! Tente novamente'))
}finally{setCarregando(false)}
       
        
    }
    useEffect(()=>{
        getRotas();
        },[]);
    return(
        <View style={styles.container}>
        <Animatable.View animation={'fadeInLeft'}delay={500} style={styles.containerHeader} >
            <Text style={styles.title}> Rotas </Text>
            <View style={styles.menu}>
                    <FlatList
                        style={styles.menu}
                        data={rotas}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>(
                            <>
                            <TouchableOpacity onPress={()=> navigation.navigate('Itinerários')}>
                            <View>
                            <Text style={styles.button}>{item.nome}</Text>
                            </View>
                            </TouchableOpacity>
                            </>
                        )}
                        />
            </View>
        </Animatable.View>
        </View>
    )
        }

        const styles = StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:'#38a29d'
            },
            containerHeader:{
                marginTop:'14%',
                marginBottom: '8%',
                paddingStart:'5%',
            },
            message:{
                fontSize:28,
                fontWeight:"bold",
                color: '#FFF'
            },
            containerForm:{
                backgroundColor:'#a1a1a1',
                width:'100%',
                borderRadius:4,
                paddingVertical:8,
                marginTop:14,
                marginBottom:20
            },
            title:{
                color:'#FFF',
                fontSize:40,
                marginTop:0,
                textAlign:"center",
                fontWeight:"bold"
            },
            button:{
                backgroundColor:'#20B2AA',
                width:'80%',
                borderRadius:14,
                paddingVertical:8,
                marginTop:14,
                textAlign:"center",
                alignItems:'center',
                alignSelf:"center"
            },
            buttonText:{
                color:'#FFF',
                fontSize:18,
                fontWeight:'bold',
                width:'100%',
                borderRadius:4,
                paddingVertical:8,
                marginTop:14,
                justifyContent:'center',
                alignItems:'center'
            },
            buttonRegister:{
                marginTop:14,
                alignSelf:'center'
            },
            registerText:{
                color:'#a1a1a1'
            },
            menu:{
                backgroundColor:'#FFF',
                marginTop:25,
                borderRadius:25,
                paddingBottom:280,
                marginRight:25
            },
        })
        