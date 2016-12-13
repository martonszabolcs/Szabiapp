/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,
  Button,
  View
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Király');
};


var Szabiapp = React.createClass({
  render: function () {
  return <View style={styles.container}>

  <View style={styles.header}>


  <View style={[styles.footer]}>
          {this.firstButton()}

  <View style={[styles.button]}>
          {this.circle()}

       </View>
       </View>
       </View>
       </View>
},

  firstButton: function () {
    return (
      <Button
  onPress={onButtonPress}
  title="1"
  color="#DD0000"
  accessibilityLabel="Learn more about this purple button"
/>

      )
      
  },

  SecondButton: function(){
    return (
      <Button
  onPress={onButtonPress}
  title="2"
  color="#DD0000"
  accessibilityLabel="Learn more about this purple button"
/>

      )
  },

  ThirdButton: function(){
    return
  },

  FourthButton: function(){
    return
  },


  FifthButton: function(){
    return
  },

  SixthButton: function(){
    return
  },

  circle: function(){
    return 
    <View style={styles.button}>
    </View>
  }
});


  var styles = StyleSheet.create({

    circle: {
      borderColor: '#00CC00',
      justifyContent: 'center',
      alignItems: 'center',
    },

     header: {
      flex: 1,
      },
    footer: {
      flex:1,
      borderWidth: 2,
      height: 100,
      borderRadius: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
      },

    lapText: {
    fontSize: 30
    },
    
    FirstButton: {
    
    },

    button: {
      borderWidth: 2,
      height: 100,
      width: 100,
      borderRadius: 50,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderColor: '#CC0000'
    },

    buttonWrapper: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    container: {
    flex: 1,
    alignItems: 'stretch'
    },

    SecondButton: {

    },
    ThirdButton: {

    },
    FourthButton: {

    },
    FifthButton: {

    },
    SixthButton: {

    }
  });

AppRegistry.registerComponent('Szabiapp', () => Szabiapp);
