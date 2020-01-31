import React, { Component, useState } from 'react';
import { AppLoading, Button, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function PersonalInfoScreen(props) {
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Personalize your profile</Text>
                <Text style={styles.subTitle}>Let us get to know you a little better.</Text>
            </View>
            <Text style={styles.label1}>Username</Text>
            <TextInput
                style={styles.textInput1}
                onChangeText={text => onChangeText(text)}
            />
            <Text style={styles.label2}>School Grade</Text>
            <TextInput
                style={styles.textInput2}
                onChangeText={text => onChangeText(text)}
            />
            <Text style={styles.label3}>Avatar</Text>
            <View style={{flex: 1}}>
                <View style={styles.avatarRow1}>
                    <TouchableOpacity>
                        <Image
                            style={{width: 56.77, height: 56.77}}
                            source={require('.././assets/avatars/avatar1.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width: 56.77, height: 56.77}}
                            source={require('.././assets/avatars/avatar2.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width: 56.77, height: 56.77}}
                            source={require('.././assets/avatars/avatar3.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width: 56.77, height: 56.77}}
                            source={require('.././assets/avatars/avatar4.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.avatarRow2}>
                    <TouchableOpacity>
                        <Image
                            style={{width: 56.77, height: 56.77}}
                            source={require('.././assets/avatars/avatar5.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width: 56.77, height: 56.77}}
                            source={require('.././assets/avatars/avatar6.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width: 56.77, height: 56.77}}
                            source={require('.././assets/avatars/avatar7.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width: 56.77, height: 56.77}}
                            source={require('.././assets/avatars/avatar8.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigate('Preferences')}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
    },
    header: {
        /* Rectangle 29 */
        position: 'absolute',
        width: 375,
        height: 127,
        left: 0,
        top: 0,

        backgroundColor: '#FFFFFF',
        shadowOffset:{ width: 0, height: 1, },
        shadowColor: 'rgba(0, 0, 0, 0.06)',
        shadowOpacity: 1
    },
    title: {
        position: 'absolute',
        width: 268,
        height: 30,
        left: 45,
        top: 40,

        /* Title */
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        /* identical to box height */

        color: '#43519D'
    },
    subTitle: {
        /* Let us get to know you a little better. */
        position: 'absolute',
        width: 244,
        height: 30,
        left: 45,
        top: 87,

        /* Paragraph */

        // fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',

        color: '#000000'

    },
    label1: {
        /* Username */
        position: 'absolute',
        width: 114,
        height: 30,
        left: 45,
        top: 159,

        /* Subtitle */
        //font-family: Nunito;
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,

        color: '#43519D'
    },
    textInput1: {
        position: 'absolute',
        width: 278,
        height: 30,
        left: 45,
        top: 194,

        backgroundColor: 'rgba(207, 207, 207, 0.3)',
        borderRadius: 5
    },
    label2: {
        /* Username */
        position: 'absolute',
        width: 114,
        height: 30,
        left: 45,
        top: 260,

        /* Subtitle */
        //font-family: Nunito;
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,

        color: '#43519D'
    },
    textInput2: {
        position: 'absolute',
        width: 278,
        height: 30,
        left: 45,
        top: 295,

        backgroundColor: 'rgba(207, 207, 207, 0.3)',
        borderRadius: 5
    },
    label3: {
        /* Username */
        position: 'absolute',
        width: 114,
        height: 30,
        left: 45,
        top: 355,

        /* Subtitle */
        //font-family: Nunito;
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,

        color: '#43519D'
    },
    avatarRow1: {
        left: 0,
        top: 400,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    avatarRow2: {
        left: 0,
        top: 420,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        /* Rectangle 1 */
        position: 'absolute',
        width: 105,
        height: 39,
        left: 131,
        top: 586,

        /* Dark Blue */
        backgroundColor: '#6872D1',
        borderRadius: 3,

        /* Text layout within button */
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    }
});