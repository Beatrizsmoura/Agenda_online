import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, FlatList} from 'react-native';

import Home from './src/pages/Home'
import ViewAgenda from './src/pages/ViewAgenda'

// View é a mesma coisa que DIV
export default function App(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                {/*<Home></Home>*/}
                <ViewAgenda></ViewAgenda>
            </View>

        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100vw',
        height: '100vh',
        flex: 1,
        backgroundColor: 'background: linear-gradient(180deg, rgba(23, 98, 255, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #FDFEFF;',
    }
})
