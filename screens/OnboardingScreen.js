import React, { Component, useState } from 'react';
import { AppLoading, Button, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function OnboardingScreen(props) {
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Curiosify</Text>
            <Image
                style={{width: 219, height: 219}}
                source={require('.././assets/onboardingLogo.png')}
            />
                <TouchableOpacity style={styles.button} onPress={() => navigate('PersonalInfo')}>
                    <Text style={styles.buttonText}>Let's go</Text>
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
    title: {
        /* Curiosify */
        position: 'absolute',
        width: 239,
        height: 71,
        left: 68,
        top: 129,

        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 55,
        textAlign: 'center',

        /* Dark Blue */
        color: '#6872D1',
        flex: 1
    },
    button: {
        /* Rectangle 1 */
        position: 'absolute',
        width: 157,
        height: 51,
        left: 109,
        top: 509,

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