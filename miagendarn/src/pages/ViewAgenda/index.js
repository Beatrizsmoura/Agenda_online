import React from 'react';
import { View, Text } from 'react-native';

export default function ViewAgenda(){
    return(
        <View style={styles.container}>
            <Text>Olá, você está visualizando a página</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100vw',
        height: '100vh',

    }
})