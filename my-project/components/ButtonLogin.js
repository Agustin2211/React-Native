import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonLogin(){
    return(
        <TouchableOpacity >
            <LinearGradient
                colors={['black', 'grey']}
                style={styles.button}>
                <Text style={styles.text}>Ingresar</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        width: 200,
    },

    button: {
        marginTop: 20,
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
        fontWeight: 'bold',
    }

});