import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, SafeAreaView, Modal} from 'react-native';
import TaskList from '../../components/TaskList/index';
import * as Animatable from 'react-native-animatable';



export default function ViewAgenda(){

    const [task, setTask] = useState([
        { key: 1, title: 'Título da Anotação', task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sollicitudin tincidunt ac a tortor nulla in elementum odio.'},
    ])

  

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    return(
        <View style={styles.container}>

            

            <TextInput 
            style={styles.input}
            placeholder='Pesquisar compromisso'
            />

            <Image style={styles.calendar} source={
                require('../../miagendaAssets/ViewAgenda/Calendar.svg')
            } />

            <Text style={styles.blocoNotas}>Bloco de Notas</Text>


            
            <View style={styles.inputBlocoNotas}>
            <TextInput 
            autoFocus={false}
            style={styles.taskTitle}
            value={title} // Passa valor
            onChangeText={ (title) => setTitle(title)} // Toda vez que eu digitar, guarda em algum lugar
            placeholder='Título da Anotação'
            />

            <TextInput
            multiline = {true}
            numberOfLines = {10}
            style={styles.task}
            value={text} // Passa valor
            onChangeText={ (text) => setText(text)} // Toda vez que eu digitar, guarda em algum lugar
            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sollicitudin'
            />
            </View>
            

            {/*
            <FlatList style={styles.list}
            marginHorizontal={10}
            data={task} // Data
            keyExtractor={ (item) => String(item.key)} // Key
            renderItem= { ({item}) => <TaskList data={item} />} // Render do item
            />
               
            */}

            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
    },

    input: {
        height: 48,
        width: 350,
        backgroundColor: 'transparent',
        borderRadius: 10,
        border: '1px solid rgba(0, 0, 0, 0.11)',
        color: 'black',
        margin: 20,
        padding: 10,


    },

    taskTitle: {
        color: '#393F4E',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 14,
        outline: '1px #fff',
        

    },

    blocoNotas: {
        marginTop: 20,
        width: '85%',
        color: '#393F4E',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'left',
    },

    list: {
        width: '93%',
        height: 'auto',
        display: 'flex',
    },

    task: {
        flexWrap: 'wrap',
        width: '100%',
        height: 'auto',
        color: '#393F4E',
        fontSize: 14,
        textAlign: 'justify',
    },

    inputBlocoNotas: {
        width: '90%',
        flex: 1,
        display: 'flex',
        backgroundColor: 'white',
        padding: 7,
        elevation: 1.5,
        shadowOpacity: 0.2,
        border: '1px solid transparent',
        borderTopColor: '#E3E3E3',
    },

    calendar: {
        width: 365,
        height: 322,

    }
})