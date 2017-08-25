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
import { Router, Scene } from 'react-native-router-flux';

import HomeComponent from './component/home/home';
import AboutComponent from './component/about/about';
import DetailComponent from './component/detail/detail';


class IndexApp extends Component {
  render() {
    return (
        <Router>
          <Scene key="root">
            <Scene key="home"
              hideNavBar
              component={HomeComponent}
              title="Home"
              initial
            />
            <Scene
              key="about"
              hideNavBar 
              component={AboutComponent}
              title="About"
            />
            <Scene
              key="detail"
              hideNavBar 
              component={DetailComponent}
              title="Detail"
            />
          </Scene>
        </Router>
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

export default IndexApp;