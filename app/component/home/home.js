/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';


class HomeComponent extends Component {

  onPressLearnMore() {
    Actions.about();
  }

  render() {
    return (
      <Image
        source={require('../../images/key-west-beaches.jpg')}
        style={styles.container}>
        <View style={styles.bottomBar}>
          <TouchableHighlight style={styles.fullWidthButton} onPress={this.onPressLearnMore}>
            <Text style={styles.fullWidthButtonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  /*container: {
      
      position:'absolute',
      bottom: 200,
      // left:0,
      right:0,
      backgroundColor:'blue',
      flexDirection: 'row',
      justifyContent:'center',
  },*/
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  positionInBottom: {
    backgroundColor: '#bb0000'
  },
  fullWidthButton: {
    backgroundColor: 'blue',
    height: 50,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidthButtonText: {
    fontSize: 24,
    color: 'white'
  },
  tabBar: {
    height: 50
  },
  tabBarButton: {
    flex: 1
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    // backgroundColor: '#1EAAF1'
  },
  button1: { backgroundColor: '#8BC051' },
  button2: { backgroundColor: '#CCD948' },
  button3: { backgroundColor: '#FDE84D' },
  button4: { backgroundColor: '#FCBF2E' },
  button5: { backgroundColor: '#FC9626' },
  /* container: {
    flex: 1,
    // backgroundColor: '#FCBF2E'
  }, */
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    // backgroundColor: '#FDE84D'
  },
  bottomBar: {
    flex: 1,
    // height: 100,
    marginBottom: 50,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    // backgroundColor: 'gray',
  },
  buttons: {
    width: 100,
    height: 50,
    textAlign: 'center',
    backgroundColor: '#8BC051'
  },
  /* container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: 320
  }, */
  backdrop: {
    paddingTop: 60,
    width: 320,
    height: 120
  },
  backdropView: {
    height: 120,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default (HomeComponent);