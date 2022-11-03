import React,{useEffect, useState} from "react";
import { View,Text, StyleSheet, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import api from '../api/api';
export default function Horarios (){
    const[horarios,setHorarios]=useState([]);
    const[carregando,setCarregando]=useState(true);
    const getHorarios = async () =>{
    try{
         await api.get("/horarios").then((response)=>{
            console.log(response.data);
            setHorarios(response.data);
           })
    }catch(error){(alert('Erro ao obter Horários! Tente novamente'))
}finally{setCarregando(false)}
       
        
    }
    useEffect(()=>{
        getHorarios();
        },[]);
    return(
        <LinearGradient colors = {['#38a29d', '#3008a29d']} style={styles.container}>
        <Animatable.View animation={'fadeInLeft'}delay={500} style={styles.containerHeader} >
            <Text style={styles.title}> Horários </Text>
            
                    <FlatList
                        style={styles.menu}
                        data={horarios}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>(
                            <>
                            <View>
                                
                            <Text style={styles.registerText}>{item.diaSemana}</Text>
                                <Text style={styles.button}>{item.horarios}</Text> 
                            </View>
                            </>
                        )}
                        />
            
        </Animatable.View>
        </LinearGradient>
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
                color: '#ddede7'
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
                color:'#ddede7',
                fontSize:40,
                marginTop:0,
                textAlign:"center",
                fontWeight:"bold"
            },
            button:{
                backgroundColor:'#20B2AA',
                width:'50%',
                borderRadius:14,
                paddingVertical:8,
                marginTop:14,
                textAlign:"center",
                alignItems:'center',
                alignSelf:"center",
                fontSize:15

            },
            buttonText:{
                color:'#black',
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
                backgroundColor:'#ddede7',
                marginTop:25,
                borderRadius:25,
                paddingBottom:480,
                marginRight:25
            },
        })
        