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
  View,
  TouchableHighlight
} from 'react-native';

export default class Szabiapp extends Component {
  render() {
    return (
      <View style={[styles.FirstButton]}>
      <Text>
        {this.FirstButton()}
        </Text>
      <View>
        {this.SecondButton()}
        {this.ThirdButton()}
        {this.FourthButton()}
        {this.FifthButton()}
        {this.SixthButton()}
      </View>
      </View>
      );
  };

  FirstButton = function(){
    return 
      <View style={[styles.FirstButton]}>
        <Text>
        143423423wgergerbetb4232fsbdetger
        </Text>
      </View>
    
  };

  SecondButton = function(){
    return
  };

  ThirdButton = function(){
    return
  };

  FourthButton = function(){
    return
  };


  FifthButton = function(){
    return
  };

  SixthButton = function(){
    return
  };

  Circle = function(){
    return <TouchableHighlight
   style={styles.circle}
   >
   </TouchableHighlight>
  };
};

  var styles = StyleSheet.create({
    Circle: {
      borderColor: '#CC0000',
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    FirstButton: {
      borderColor: '#CC0000',
      height: 100,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',

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
