import React, { Component, useState } from 'react';
import { AppLoading, Button, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default function PersonalInfoScreen(props) {
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Personalize your profile</Text>
                <Text style={styles.subTitle}>Let us get to know you a little better.</Text>
            </View>
            <View style={styles.fieldsSection}>
            <Text style={styles.fieldTitle}>Username</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Type your unique username here'
            />
            <Text style={styles.fieldTitle}>School Grade</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Type your school grade here'
                keyboardType={"number-pad"}
            />
            <Text style={styles.fieldTitle}>Select Your Avatar</Text>
            <View style={styles.avatarSection}>
                <View style={styles.avatarRow}>
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
                <View style={styles.avatarRow}>
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
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 30,
        width: '100%',
        shadowOffset:{ width: 0, height: 1, },
        shadowColor: 'rgba(0, 0, 0, 0.06)',
        shadowOpacity: 1,
        backgroundColor: 'white',
    },
    fieldsSection: {
    },
    avatarSection: {
        alignItems: 'center',
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        color: '#43519D'
    },
    subTitle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
        marginTop: 10,
    },
    fieldTitle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        color: '#43519D',
        marginTop: 10,
    },
    textInput: {
        backgroundColor: 'rgba(207, 207, 207, 0.3)',
        borderRadius: 5,
        height: 40,
        padding: 10,
        margin: 10,
        width: 300,
    },
    avatarRow: {
        width: '80%',
        margin: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 105,
        height: 39,
        backgroundColor: '#6872D1',
        borderRadius: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    }
});