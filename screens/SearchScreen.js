import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View, TextInput, Button } from 'react-native';
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
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
          />
  
          <Button
            title="Search"
          />
  
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.name}, {item.url}</Text>}
            keyExtractor={({id}, index) => id}
          />
        </View>
      );
    }
  }
  