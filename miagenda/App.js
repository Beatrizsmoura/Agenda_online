import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/components/TaskList';

// View é a mesma coisa que DIV
export default function App(){

    const [task, setTask] = useState([
        { key: 1, task: 'Comprar pão'},
        { key: 2, task: 'Dar boa noite'},
        { key: 3, task: 'Enganar Trouxa'},
    ])

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#171d31" barStyle="ligh-content" />
            <View style={styles.content}>
                <Text style={styles.title}>Tarefas</Text>
            </View>

            <FlatList
            marginHorizontal={10}
            showsVerticalScrollIndicator={false}
            data={task} // Data
            keyExtractor={ (item) => String(item.key)} // Key
            renderItem= { ({item}) => <TaskList data={item} />} // Render do item
            />


        <TouchableOpacity style={styles.fab}>
            <Ionicons name="ios-add" size={40} color="#fff"/>
        </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171d31'
    },

    title: {
        marginTop: 10,
        paddingBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'

    },

    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#0094ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        right: 25,
        bottom: 25,
        elevation: 2,
        zIndex: 9,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3,
        }

    }
})