import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity,} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function TaskList({data}){
    return(
        <Animatable.View 
        style={styles.container}
        animation='bounceIn'
        useNativeDriver
        >
         
                <View>
                    <Text style={styles.taskTitle}>{data.title}</Text>
                    <Text style={styles.task}>{data.task}</Text>
                </View>

                <TouchableOpacity style={styles.button}>


                <Image style={styles.buttonAnotacao} source={
                require('../../miagendaAssets/ViewAgenda/ButtonAnotacao.svg')
            } />
            </TouchableOpacity>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        margin: 8,
        backgroundColor: 'white',
        padding: 7,
        elevation: 1.5,
        shadowOpacity: 0.2,
        border: '1px solid transparent',
        borderTopColor: '#E3E3E3',

    },
    taskTitle: {
        color: '#393F4E',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 14,

    }
    ,
    task: {
       // flexWrap: 'wrap',
        width: '100%',
        height: 60,
        color: '#393F4E',
        fontSize: 14,
        textAlign: 'justify',
    },

    button:{
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 15,
    },


    buttonAnotacao: {
        width: 47,
        height: 42,
    }
})