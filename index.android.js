/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import IndexApp from './app/index';
import { Provider } from 'react-redux';

export default class patientApp extends Component {
  render() {
    return (
        <IndexApp/>
    );
  }
}

AppRegistry.registerComponent('patientApp', () => patientApp);
