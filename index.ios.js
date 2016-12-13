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
  View
} from 'react-native';

var Szabiapp = React.createClass({
  render: function () {
    return  <View style={[styles.buttonWrapper]}>
        {this.FirstButton()}
       </View>
    },

  FirstButton: function () {
    return
      <View style={[styles.buttonWrapper]}>
        <Text>
        143423423wgergerbetb4232fsbdetger
        </Text>
      </View>
  },

  SecondButton: function(){
    return

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

  Circle: function(){
    return 
  }
});


  var styles = StyleSheet.create({

    Circle: {
      borderColor: '#00CC00',
      justifyContent: 'center',
      alignItems: 'center',
    },
    FirstButton: {
    
    },

    buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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
