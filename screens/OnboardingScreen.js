import React, { Component, useState } from 'react';
import { AppLoading, Button, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function OnboardingScreen(props) {
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Curiosify</Text>
            <Image
                style={{width: 219*1.2, height: 219*1.2}}
                source={require('.././assets/onboardinglogo.gif')}
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
        backgroundColor: '#F8F8F8',
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 40,

        /* Dark Blue */
        color: '#6872D1',
    },
    button: {
        width: 157,
        height: 51,
        marginTop: 40,

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
        fontWeight: 'bold',
    }
});