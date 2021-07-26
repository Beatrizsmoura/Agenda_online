import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList} from 'react-native';
import TaskList from '../../components/TaskList/index';

export default function ViewAgenda(){

    const [task, setTask] = useState([
        { key: 1, title: 'Título da Anotação', task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sollicitudin tincidunt ac a tortor nulla in elementum odio.'},
        { key: 2, title: 'Título da Anotação', task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sollicitudin tincidunt ac a tortor nulla in elementum odio.'},
        { key: 3, title: 'Título da Anotação', task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sollicitudin tincidunt ac a tortor nulla in elementum odio.'},
        { key: 4, title: 'Título da Anotação', task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sollicitudin tincidunt ac a tortor nulla in elementum odio.'},
        { key: 5, title: 'Título da Anotação', task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sollicitudin tincidunt ac a tortor nulla in elementum odio.'},
    ])


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

            <FlatList style={styles.list}
            marginHorizontal={10}
            data={task} // Data
            keyExtractor={ (item) => String(item.key)} // Key
            renderItem= { ({item}) => <TaskList data={item} />} // Render do item
            />
               
            

            
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

    calendar: {
        width: 365,
        height: 322,

    }
})