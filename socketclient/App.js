/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { subscribeToTimer } from './api'


export default class App extends Component {

  constructor(props) {
    super(props);
    // Creating the socket-client instance will automatically connect to the server.



    
    this.state = {
      timestamp: 'No timer yet..'
    };

    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
    

  }

  componentDidMount(){



  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SOCKET CLIENT</Text>
        <Text>{this.state.timestamp}</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
