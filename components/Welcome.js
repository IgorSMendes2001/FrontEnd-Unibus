import React from "react";
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';


export default function Welcome (){
    const navigation = useNavigation();
return (
    
    <View
     style = {styles.container}
    >
        <LinearGradient  colors={['#38a29d','#3008a29d']} style = {styles.containerLogo}>
        <Animatable.Image
            animation="flipInY"
            source={require('../assets/Unibus.png')}
            style={{ width: '110%' }}
            resizeMode="contain" />
    </LinearGradient><Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}> Cadastre-se ou faça login para ter acesso ao App </Text>
            <Text style={styles.text}>O melhor app de Transporte coletivo de Patos de Minas e Região!</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

        </Animatable.View>
        </View>
);

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerLogo:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#ddede7',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12,
        textAlign:"center"
    },
    text:{
        color:'#a1a1a1',
        textAlign:"center"
    },
    button:{
        position:'absolute',
        backgroundColor:'#38a29d',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#ddede7',
        fontWeight:"bold"
    },
    transparent:{
        flex:1
    }
})