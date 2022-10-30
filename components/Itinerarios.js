import React,{useEffect, useState} from "react";
import { View,Text, StyleSheet, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import api from "../api/api";
import { Dropdown } from "react-native-element-dropdown";
export default function Itinerarios (){
    const[itinerarios,setItinerarios]=useState([]);
    const[carregando,setCarregando]=useState(true);
    const getItinerarios = async () =>{
        try{
            await api.get("/itinerarios").then((response)=>{
                console.log(response.data);
                setItinerarios(response.data);
        })
    }catch(error){(alert('Erro ao obter Itinerários! Tente novamente'))
    }finally{setCarregando(false)}
        
    }
    useEffect(()=>{
        getItinerarios();
        },[]);
    return(
        <View style={styles.container}>
        <Animatable.View animation={'fadeInLeft'}delay={500} style={styles.containerHeader} >
            <Text style={styles.title}> Itinerários </Text>
                    <FlatList
                        style={styles.menu}
                        data={itinerarios}
                        keyExtractor={({id},index)=>id}
                        renderItem={({item})=>(
                            <><Text style={styles.registerText}>Ponto Inicial:{item.pontoInicial}</Text>
                            <Text style={styles.registerText}>Percurso:{item.percurso}</Text>
                            <Text style={styles.registerText}>Ponto final:{item.pontoFinal}</Text>
                            <Text style={styles.registerText}>Horários disponíveis:</Text>
                            <Text style={styles.button}>{item.horario.horarios[0]}</Text>
                            <Text style={styles.button}>{item.horario.horarios[1]}</Text>
                            <Text style={styles.button}>{item.horario.horarios[2]}</Text>
                            <Text style={styles.registerText}>{item.rota.nome}</Text></>


                        )}
                        />
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
                width:'70%',
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
                color:'black',
                fontWeight:'bold',
                textAlign:'center',
                fontSize:18,
                marginTop:20
            },
            menu:{
                backgroundColor:'#FFF',
                marginTop:25,
                borderRadius:25,
                paddingBottom:280,
                marginRight:25
            },
         
        })
        