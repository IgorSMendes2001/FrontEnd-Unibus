import React from "react";
import { TouchableOpacity,StyleSheet,View,Text,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
export default function Menu(){
    const navigation = useNavigation();
return(
    <LinearGradient colors = {['#38a29d', '#3008a29d']} style={styles.container}>
    <Animatable.View animation={'fadeInLeft'}delay={500} style={styles.containerHeader} >
        <Image style={styles.image} resizeMode="contain" source={require('../assets/logo.png')}/>
        <Text style={styles.message}> Seja Bem Vindo ! </Text>
        </Animatable.View>
            <><Animatable.View animation={"fadeInUp"} style={styles.menu}><View>
                    <TouchableOpacity onPress={()=> navigation.navigate('Rotas')}>
                        <Text style={styles.button}>Ver Rotas</Text>
                    </TouchableOpacity>
                </View>
                <View>
                        <TouchableOpacity onPress={()=> navigation.navigate('Itinerários')}>
                            <Text style={styles.button}>Ver Itinerarios</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> navigation.navigate('Horários')}>
                            <Text style={styles.button}>Ver Horários</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=> navigation.navigate('Cartão')}>
                            <Text style={styles.button}>Solicitar/Renovar Cartão AndeFácil </Text>
                        </TouchableOpacity>
                    </View>
                    </Animatable.View></>
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
            color: '#ddede7',
            textAlign:"center"
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
        image:{
            marginTop: -470,
            marginBottom: -310,
            width:"100%"

        },
       
        button:{
            backgroundColor:'#20B2AA',
            width:'70%',
            borderRadius:14,
            paddingVertical:8,
            marginTop:14,
            textAlign:"center",
            alignItems:'center',
            alignSelf:"center",
        },
        buttonText:{
            color:'#ddede7',
            fontSize:18,
            fontWeight:'bold'
        },
        buttonRegister:{
            marginTop:14,
            alignSelf:'center'
        },
        registerText:{
            color:'#a1a1a1'
        },
        menu:{
            backgroundColor:'#ddede7',
            marginTop:5,
            borderRadius:25,
            paddingBottom:380,
            marginRight:25,
            marginLeft:25
        },
    })
    