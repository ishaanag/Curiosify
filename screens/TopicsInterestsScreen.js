import React, { Component, useState } from 'react';
import { AppLoading, Button, View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
import LinearGradient from 'react-native-linear-gradient';
import { withOrientation } from 'react-navigation';


export default function TopicsInterestsScreen(props) {
    const { navigate } = props.navigation;
    const imageMultiplier = 0.24;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>What type of topic are you interested in?</Text>
                <Text style={styles.subTitle}>Pick 3 or more to discover new ideas.</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardsSection}>
                    <View style={styles.cardsColumn}>
                        <TouchableOpacity style={styles.cards}>
                            <Image
                                style={{width: 772*imageMultiplier, height: 820*imageMultiplier}}
                                source={require('.././assets/media/space.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <Image
                                style={{width: 772*imageMultiplier, height: 704*imageMultiplier}}
                                source={require('.././assets/media/renewableenergy.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <Image
                                style={{width: 772*imageMultiplier, height: 672*imageMultiplier}}
                                source={require('.././assets/media/chemistry.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <Image
                                style={{width: 772*imageMultiplier, height: 584*imageMultiplier}}
                                source={require('.././assets/media/transport.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardsColumn}>
                        <TouchableOpacity style={styles.cards}>
                            <Image
                                style={{width: 712*imageMultiplier, height: 664*imageMultiplier}}
                                source={require('.././assets/media/animalkingdom.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <Image
                                style={{width: 712*imageMultiplier, height: 972*imageMultiplier}}
                                source={require('.././assets/media/robotics.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}> 
                            <Image
                                style={{width: 712*imageMultiplier, height: 548*imageMultiplier}}
                                source={require('.././assets/media/computers.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <Image
                                style={{width: 712*imageMultiplier, height: 624*imageMultiplier}}
                                source={require('.././assets/media/mathematics.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Search')}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
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
    cardsSection: {
        width: '100%',
        //flex: 1,
        flexDirection: 'row',
    },
    cards: {
        //justifyContent: "space-between",
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
    cardsColumn: {
        margin: 10,
        marginBottom: 20,
        flexDirection: 'column',
        //justifyContent: 'flex-start',
    },
    footer: {
        padding: 40,
        width: '100%',
        backgroundColor: 'white',
        shadowColor: 'white',
        shadowRadius: 100,
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 10},
        alignItems: 'center',
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
        fontWeight: 'bold'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    }
});