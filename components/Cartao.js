import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function Cartao() {

  return (
    <LinearGradient colors={['#38a29d', '#3008a29d']} style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={require('../assets/logo.png')} />
      <Animatable.View style={styles.containerForm}>
      <Text style={styles.title}>Solicitar Renovação Cartão Ande Fácil</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Digite seu nome"
          placeholderTextColor="black"
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="E-mail"
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="ID"
          placeholderTextColor="black"
        />
      </View>
 
      <TouchableOpacity style={styles.enviarBtn}>
        <Text style={styles.enviarText}>Enviar solicitação</Text>
      </TouchableOpacity>
      </Animatable.View>
    </LinearGradient>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#38a29d'
  },

  image: {
    marginTop: -390,
    marginBottom: -280,
    width:"100%"
  },
  containerForm:{
    backgroundColor:'#ddede7',
    flex:1,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    borderRadius:25,
    alignItems: "center",
    justifyContent: "center",
    marginTop:25,
    with:"150%",
    margin:22
},
  inputView: {
    backgroundColor: "#ddede7",
    borderRadius: 30,
    borderColor:'#38a29d',
    borderWidth:5,
    width: "100%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    width:270,
    padding: 10,
    marginLeft: 20,
    textAlign:"center"
  },
  title:{
    fontSize:20,
    marginTop:-180,
    marginBottom:43,
    width:280,
    margin:40,
    fontWeight:"bold",
    textAlign:"center"
},
  enviarBtn: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#38a29d",
  },

  enviarText: {
    fontSize: 17,
    color: "#FFF",
    width:170,
    textAlign:"center"
  }
});