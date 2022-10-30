import React from "react";
import { TouchableOpacity,StyleSheet,View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
export default function Menu(){
    const navigation = useNavigation();
return(
    <View style={styles.container}>
    <Animatable.View animation={'fadeInLeft'}delay={500} style={styles.containerHeader} >
        <Text style={styles.title}> UNIBUS </Text>
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
                        <TouchableOpacity onPress={()=> navigation.navigate('Horários')}>
                            <Text style={styles.button}>Solicitar/Renovar Cartão AndeFácil </Text>
                        </TouchableOpacity>
                    </View>
                    </Animatable.View></>
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
            color: '#FFF',
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
            backgroundColor:'#FFF',
            marginTop:5,
            borderRadius:25,
            paddingBottom:380,
            marginRight:25,
            marginLeft:25
        },
    })
    