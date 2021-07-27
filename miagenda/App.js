import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home'
import ViewAgenda from './src/pages/ViewAgenda'
import CriarCompromisso from './src/pages/CriarCompromisso';




// View é a mesma coisa que DIV
export default function App(){

    const Stack = createStackNavigator();

    return(
        
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                



                    <Stack.Screen
                    options={{
                        title: '',
                        headerStyle: {
                            
                            height: 0,
                           
                        }
                    }}
                    name="Home" component={Home} />
                    <Stack.Screen
                    options={{
                        title: 'Miagenda',
                        headerLeft: null,
                        alignItems: 'center',
                        
                        
                        headerStyle:{
                            borderBottomColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        },
                        headerTitleStyle: {
                            fontSize: 25,
                        },
                        headerTitleAlign: 'center',
                    }} 
                    
                    name="ViewAgenda" component={ViewAgenda} />

                    <Stack.Screen
                    options={{
                        title: 'Criar Compromisso',
                        
                        headerStyle:{
                            borderBottomColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        },
                        headerTitleStyle: {
                            fontSize: 25,
                        },
                        headerTitleAlign: 'center',
                    }} 
                    
                    name="CriarCompromisso" component={CriarCompromisso} />

                </Stack.Navigator>
            </NavigationContainer>

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
