import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Logo from '../../miagendaAssets/Home/Logo.svg'

export default function Home(){
    return(
        <View style={styles.container}>

            <Image style={styles.logo} source={
                require('../../miagendaAssets/Home/Logo.svg')
                }>
               
            </Image>
            <Text style={styles.textInicial}>Bem-vindo(a) ao Miagenda!</Text>
            <Text style={styles.p}>Fique livre das complicações e organize tudo no seu tempo.</Text>

            

            <TouchableOpacity 
            style={styles.button}>
                
                <Image
                style={styles.iconButton} 
                source={
                    require('../../miagendaAssets/Home/ButtonIcon.svg')
                }></Image>
                <Text style={styles.textButton}>Experimentar Agenda</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
    },
    logo:{
        marginTop: 40,
        width: '298px',
        height: '248.51px',
    },
    textInicial: {
        color: '#414142',
        fontSize: 36,
        fontWeight: '800',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 40,
    },
    p: {
        marginTop: -15,
        fontSize: 16,
        textAlign: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        color: '#969696',
        fontWeight: '500',

    },

    button: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        alignItems: 'center',
        margin: 15,
        backgroundColor: '#FF9547',
        padding: 10,
        width: 309,
        height: 59,
        borderRadius: 10,
        marginTop: 47,
        
    },
    iconButton: {
        width: 24,
        height: 27,
    },

    textButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    }

})