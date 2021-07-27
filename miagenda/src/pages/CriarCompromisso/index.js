import React from "react";

import { View, Text, TextInput, Image, ScrollView, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { RectButton, BorderlessButton } from "react-native-gesture-handler";

import ReuniaoPng from "../../miagendaAssets/CriarCompromisso/reuniao.png";
import ConvidadosPng from "../../miagendaAssets/CriarCompromisso/convidados.png";
import AnotacoesPng from "../../miagendaAssets/CriarCompromisso/anotacoes.png";

//import Header from "../../components/Header";

export default function CriarCompromisso(props) {
    return (
        <View style={styles.container}>
              
            <ScrollView>
                <View style={styles.groupTituloCompromisso}>
                    <TextInput
                        style={styles.tituloCompromisso}
                        placeholder="Título do Compromisso"
                        placeholderTextColor="#AFB3BE"
                    />
                </View>

                <View style={styles.horarioCompromisso}>
                    <Text style={styles.tituloHorario}>Horário Compromisso</Text>
                    <View style={styles.horario}>
                        <View style={styles.inputsHorario}>
                            <Text style={styles.labelHorario}>Início</Text>
                            <View style={styles.boxHora}>
                                <TextInput style={styles.inputHora} />
                                <Text style={styles.divisor}>:</Text>
                                <TextInput style={styles.inputHora} />
                            </View>
                        </View>
                        <View style={styles.inputsHorario}>
                            <Text style={styles.labelHorario}>Fim</Text>
                            <View style={styles.boxHora}>
                                <TextInput style={styles.inputHora} />
                                <Text style={styles.divisor}>:</Text>
                                <TextInput style={styles.inputHora} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.inputsSecundarios}>
                        <View style={styles.headerInput}>
                            <Image
                                source={ReuniaoPng}
                            />
                            <Text style={styles.titleInput}>Reunião</Text>
                        </View>
                        <View style={styles.bodyInputs}>
                            <TextInput
                                placeholder="Adicione aqui o Link para reunião."
                                style={styles.inputSecundario}
                            />
                            <RectButton
                                style={styles.check}
                            >
                                <FontAwesome5 name="check" size={18} color="white" />
                            </RectButton>
                        </View>
                    </View>

                    <View style={styles.inputsSecundarios}>
                        <View style={styles.headerInput}>
                            <Image
                                source={ConvidadosPng}
                            />
                            <Text style={styles.titleInput}>Convidados</Text>
                        </View>
                        <View style={styles.bodyInputs}>
                            <View style={styles.grupoConvidados}>
                                <View style={styles.inputConvidados}>
                                    <TextInput
                                        placeholder="Adicione aqui o email do convidado."
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.arrow}>
                                    <MaterialIcons name="keyboard-arrow-down" size={40} color="black" />
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={styles.inputsSecundarios}>
                        <View style={styles.headerInput}>
                            <Image
                                source={AnotacoesPng}
                            />
                            <Text style={styles.titleInput}>Anotações</Text>
                        </View>
                        <View style={styles.bodyInputs}>
                            <TextInput
                                placeholder="Pré-visualização da anotação..."
                                style={styles.inputSecundario}
                            />
                            <RectButton
                                style={[styles.check, { backgroundColor: '#A4A9B4' }]}
                            >
                                <AntDesign name="delete" size={18} color="white" />
                            </RectButton>
                        </View>
                    </View>

                    <View style={styles.salvar}>
                        <RectButton style={styles.button}>
                            <View style={styles.image}>
                                <FontAwesome name="calendar-plus-o" size={24} color="white" />
                            </View>
                            <View style={styles.groupTitle}>
                                <Text style={styles.titleButton}>Salvar Compromisso</Text>
                            </View>
                        </RectButton>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    groupTituloCompromisso: {
        paddingHorizontal: 26
    },
    tituloCompromisso: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E3E3E3',
        paddingVertical: 17,
        fontSize: 18,
        fontFamily: 'Inter_600SemiBold'
    },
    horarioCompromisso: {
        paddingHorizontal: 26,
        marginTop: 11,
        paddingBottom: 26
    },
    tituloHorario: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16
    },
    horario: {
        borderBottomWidth: 1,
        borderColor: '#E3E3E3'
    },
    inputsHorario: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    labelHorario: {
        fontFamily: 'Inter_500Medium',
        marginLeft: 21
    },
    boxHora: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputHora: {
        width: 63,
        height: 48,
        backgroundColor: 'rgba(145, 179, 250, 0.18)',
        borderRadius: 5,
        textAlign: 'center'
    },
    divisor: {
        marginHorizontal: 6,
        fontFamily: 'Inter_600SemiBold'
    },
    inputsSecundarios: {
        marginTop: 11
    },
    headerInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleInput: {
        marginLeft: 22,
        fontFamily: 'Inter_600SemiBold'
    },
    bodyInputs: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 16
    },
    inputSecundario: {
        width: 326,
        height: 48,
        textAlign: 'center',
        backgroundColor: '#EBF1FE',
        borderRadius: 5,
    },
    check: {
        width: 26,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393F4E',
        borderRadius: 3,
        marginLeft: 15
    },
    grupoConvidados: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.11)',
        borderRadius: 10,
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    inputConvidados: {
        flex: 1,
        alignItems: 'center'
    },
    arrow: {
        width: 56,
        alignItems: 'center'
    },
    salvar: {
        marginTop: 21
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#FF9547',
        height: 54,
        alignItems: 'center',
        borderRadius: 10
    },
    image: {
        width: 64,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.5,
        borderRightColor: '#FFFFFF'
    },
    groupTitle: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleButton: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Inter_500Medium',
        fontSize: 18
    }
});