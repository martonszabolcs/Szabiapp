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
               <View style={[styles.header, {justifyContent:this.state.justifyContent, alignItems:this.state.alignItems}]} id="circleContainer">
                  <View style={styles.button} id="circle">
                  </View>
              </View>

                     <View style={styles.bigFooter}>
                         <View style={styles.footer}>
  
                               <Button
                               onPress={this.onUpLeftButtonPress}
                               title="O"
                               color="white"
                               accessibilityLabel="Learn more about this purple button"/>

                               <Button
                               onPress={this.onUpButtonPress}
                               title="O"
                               color="white"
                               accessibilityLabel="Learn more about this purple button"/>

                               <Button
                               onPress={this.onUpRightButtonPress}
                               title="O"
                               color="white"
                               accessibilityLabel="Learn more about this purple button"/>
                         </View>

                                   <View style={styles.downFooter}>

                                            <Button
                                            onPress={this.onDownLeftButtonPress}
                                            title="O"
                                            color="white"
                                            accessibilityLabel="Learn more about this purple button"/>

                                            <Button
                                            onPress={this.onDownButtonPress}
                                            title="O"
                                            color="white"
                                            accessibilityLabel="Learn more about this purple button"/>

                                            <Button
                                            onPress={this.onDownRightButtonPress}
                                            title="O"
                                            color="white"
                                            accessibilityLabel="Learn more about this purple button"/>

                                  </View>
                    </View>
            </View>



},  
  onUpButtonPress: function () {
 this.setState({justifyContent: 'flex-start'})
 this.setState({alignItems: 'center'})

},
  onUpLeftButtonPress: function () {
 this.setState({alignItems: 'flex-start'})
 this.setState({justifyContent: 'flex-start'})

}, 
 onUpRightButtonPress: function () {
 this.setState({justifyContent: 'flex-start'})
 this.setState({alignItems: 'flex-end'})


},
  onDownButtonPress: function () {
 this.setState({justifyContent: 'flex-end'})
 this.setState({alignItems: 'center'})

}, 
 onDownLeftButtonPress: function () {
 this.setState({justifyContent: 'flex-end'})
 this.setState({alignItems: 'flex-start'})

}, 
 onDownRightButtonPress: function () {
 this.setState({justifyContent: 'flex-end'})
 this.setState({alignItems: 'flex-end'})
}
});


  var styles = StyleSheet.create({

     header: {
      flex: 3,
      backgroundColor: '#dd7556',
      marginTop: 25,
      padding: 5
      },

    footer: {
      flexDirection: 'row',
      },

    downFooter: {
      flexDirection: 'row',
      },

    bigFooter: {
      flex: 1,
      borderWidth: 2,
      borderRadius: 30,
      backgroundColor: '#9999',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 5,
    },
    
    FirstButton: {
    borderRadius: 10,
    justifyContent: 'center',
      alignItems: 'center'
    },

    button: {
      borderWidth: 50,
      height: 100,
      width: 100,
      borderRadius: 500,
      borderColor: 'black'
    },

    container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#dd9876'
    },
  });

AppRegistry.registerComponent('Szabiapp', () => Szabiapp);
