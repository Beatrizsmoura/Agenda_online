import React, {useState} from 'react';


import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// View é a mesma coisa que DIV
export default function App(){

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');


    function handleSubmit(){
        const imc = peso/((altura/100)**2);


        if(imc < 18){
            alert("Você está abaixo do peso!" + imc.toFixed(2))
        }else if(imc > 18.6 && imc < 24.9){
            alert("Peso ideal!" + imc.toFixed(2))
        }else if(imc >= 24.9 && imc <34.9){
            alert("Levemente acima do peso!" + imc.toFixed(2))
        }else {
            alert("Bastante acima do peso!" + imc.toFixed(2))
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Calcule seu IMC</Text>

            <TextInput 
            style={styles.input}
            value={peso} // Passa valor
            onChangeText={ (peso) => setPeso(peso)} // Toda vez que eu digitar, guarda em algum lugar
            placeholder="Peso (Kg)"
            keyboardType='numeric'
            />

            <TextInput 
            style={styles.input}
            value={altura} // Passa valor
            onChangeText={ (altura) => setAltura(altura)} // Toda vez que eu digitar, guarda em algum lugar
            placeholder="Altura (cm)"
            keyboardType='numeric'
            />

            <Text styles={styles.title}>Peso: {peso}kg / Altura: {altura}cm</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    title: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30,
    },

    input: {
        backgroundColor: '#121212',
        borderRadius: 5,
        color: '#fff',
        margin: 20,
        padding: 10,


    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#41Aef4',
        padding: 10,

    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }

})