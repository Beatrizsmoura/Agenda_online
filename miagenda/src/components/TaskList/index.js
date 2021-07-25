import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskList( {data}){
    return(
        <View style={styles.container}>
            <TouchableOpacity>


                <Ionicons name="md-checkmark-circle" size={30} color="#121212" />
            </TouchableOpacity>
            <View>
                <Text style={styles.task}>{data.task}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 7,
        elevation: 1.5,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3,
        }
    },
    task: {
        color: '#121212',
        fontSize: 15,
        fontWeight: 'bold',

    }
})
