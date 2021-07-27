import React from "react";

import { View, Image, Text, StyleSheet } from "react-native";
import { RectButton, BorderlessButton } from "react-native-gesture-handler";


import BackPng from "../../assets/back.png";

export default function Header() {
    return (
        <View style={styles.container}>
            <BorderlessButton>
                <Image
                    source={BackPng}
                />
            </BorderlessButton>

            <Text style={styles.dia}>Dia 22</Text>
            <RectButton style={styles.buttonSecondary}>
                <Text>Teste</Text>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 63,
        flexDirection: 'row',
        marginTop: getStatusBarHeight(),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 26
    },
    dia: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        lineHeight: 36
    },
    buttonSecondary: {
        opacity: 0
    }
});

