import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonLogin from './components/ButtonLogin';

export default function App() {

  return (
    <View style={styles.container}>
      <FontAwesome
      name='user'
      size={100}
      />
      <Text style={styles.titulo}>¡Bienvenido!</Text>
      <Text style={styles.subtitulo}>Para poder continuar, debe iniciar sesión</Text>
      <TextInput style={styles.textInput}
        placeholder='Email'
      />
      <TextInput style={styles.textInput}
        placeholder='Contraseña'
      />
      <ButtonLogin />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 70,
    fontWeight: 'bold'
  },

  subtitulo:{
    fontSize: 21,
    color: 'gray'
  },

  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    padding: 10,
    paddingStart: 20,
    width: "80%",
    height: 50,
    marginTop: 20,
  }

  
});


