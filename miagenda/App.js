import React from 'react'


import {View, Text, StyleSheet } from 'react-native';
// View é a mesma coisa que DIV
export default function App(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meu app</Text>
            <Text style={styles.texto}>CRIANDO MEU PRIMEIRO APP COM EXPO E REACT NATIVE </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        color: 'white',
        fontSize: '34px' // 34px (sem '')
    },

    texto: {
        color: '#fff',
        fontSize: '20px',
        textAlign: 'center',
    }
})