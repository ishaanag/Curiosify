import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import * as keys from '.././keys.json';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class FetchExample extends React.Component {

    constructor(props){
      super(props);
      this.state = {isLoading: true}
    }
  
    componentDidMount(){
      return fetch('https://api.cognitive.microsoft.com/bing/v7.0/search?q=Cat', {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': 'dc8b919506fb452ea019091574af9643'
        }
      })
        .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              dataSource: responseJson.webPages.value
            }, 
            function(){});
          })
          .catch((error) =>{
            console.error(error);
          });
    }
  
    render(){
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
    }
  
      return(
        <View style={{flex: 1, paddingTop:20}}>
            <View style={styles.header}>
                <Text style={styles.title}>Search</Text>
                <View style={{flexDirection: 'row', width: '100%', left: 20, top: 80}}>
                    <Image style={{flex: 1}}
                    style={{width: 30, height: 30}}
                    source={require('.././assets/search.png')}
                    />
                    <TextInput
                    style={styles.searchBar}
                    placeholder='Topics, projects, or games'
                    />
                </View>
                <View style={{height: 46}}>
                    <ScrollView horizontal={true} centerContent={true} style={styles.scrollview}>
                        <View style={styles.recentButton}>
                            <Text style={{color: '#6872D1'}}>Recent</Text>
                        </View>
                        <Image 
                        style={{width: 86, height: 55, marginRight: 20}}
                        source={require('.././assets/gradients/purplepink.png')}
                        />
                        <Image 
                        style={{width: 86, height: 55, marginRight: 20}}
                        source={require('.././assets/gradients/orangeyellow.png')}
                        />
                        <Image 
                        style={{width: 86, height: 55, marginRight: 20}}
                        source={require('.././assets/gradients/purpleblue.png')}
                        />
                    </ScrollView>
                </View>
                <Text style={styles.label1}>Your suggested topics</Text>
                <Text style={styles.label2}>Browse all</Text>
            </View>
          {/* <FlatList style={{top: 200}}
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.name}, {item.url}</Text>}
            keyExtractor={({id}, index) => id}
          /> */}
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    recentButton: {
        top: 9,
        height: 32, 
        width: 86, 
        borderWidth: 2, 
        borderColor: '#6872D1', 
        borderRadius: 16, 
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    scrollview: {
        top: 92,
    },
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
        height: 180,
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
        left: 20,
        top: 40,

        /* Title */
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 30,
        /* identical to box height */

        color: '#6872D1'
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
        width: '100%',
        height: 30,
        left: 20,
        top: 200,

        /* Subtitle */
        //font-family: Nunito;
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 22,

        color: '#6872D1'
    },
    searchBar: {

        backgroundColor: 'rgba(207, 207, 207, 0.3)',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        width: '80%'
    },
    label2: {
        /* Username */
        position: 'absolute',
        width: '100%',
        height: 30,
        left: 20,
        top: 300,

        /* Subtitle */
        //font-family: Nunito;
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 22,

        color: '#6872D1'
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
        top: 30,
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