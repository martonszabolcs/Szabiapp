/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';






var Szabiapp = React.createClass({
getInitialState: function() {
    return {
      justifyContent: 'center',
      alignItems: 'center'
    }
  },




// <View style=
// ((Stilus megadás)){[styles.header,
// ((State hivatkozás)) {justifyContent:this.state.justifyContent}]} 
//((név adás => id="circleContainer">
//      <View style={styles.button} id="circle">
  render: function () {
    return <View style={styles.container} id="container">
    <View style={[styles.header, {justifyContent:this.state.justifyContent, alignItems:this.state.alignItems, }]} id="circleContainer">
      <View style={styles.button} id="circle">
      </View>
    </View>

  <View style={styles.footer}>
  
  <Button
  onPress={this.onButtonPress}
  title="Up->"
  color="white"
  accessibilityLabel="Learn more about this purple button"/>

  <Button
  onPress={this.onButtonPress}
  title="Up"
  color="white"
  accessibilityLabel="Learn more about this purple button"/>

  <Button
  onPress={this.onButtonPress}
  title="<-Up"
  color="white"
  accessibilityLabel="Learn more about this purple button"/>

       </View>
       </View>
      //GOMBOK FÜGGVÉNYEK

},
  onButtonPress: function () {
 this.setState({justifyContent: 'flex-start'})

},
onSecondButtonPress: function () {
 this.setState({justifyContent: 'flex-start'})

},
  firstButton: function () {  
  },

  SecondButton: function(){
    return (
      <Button
  onPress={onButtonPress}
  title="2"
  color="#white"
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

  
});


  var styles = StyleSheet.create({

    circle: {
      borderColor: '#0000',
      justifyContent: 'center',
      alignItems: 'center',
    },

     header: {
      flex: 1,
      backgroundColor: '#dd9876',
      marginTop: 50
      
      },
    footer: {
      flex:1,
      borderWidth: 2,
      height: 100,
      borderRadius: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9999'

      },

    middle: {
      flex: 2,
    },

    lapText: {
    fontSize: 30
    },
    
    FirstButton: {
    borderRadius: 10,
    justifyContent: 'center',
      alignItems: 'center'
    },

    button: {
      borderWidth: 20,
      height: 10,
      width: 10,
      borderRadius: 50,
      borderColor: 'black'
    },

    buttonWrapper: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#dd9876'

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
