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
  FlatList,
  Image
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'


class DetailComponent extends Component {
  renderFlatListItem(item) {
    return (
      <View style={styles.listStyle}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 50 }}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
        <Text style={styles.item}>{item.key}</Text>
        <Text style={styles.item}>{item.key}</Text>
      </View>
    )
  }
  render() {
    const users = [
      {
        name: 'Angular',
        avatar: 'http://blog.narenarya.in/images/angular.jpg'
      },
      {
        name: 'React',
        avatar: 'https://facebook.github.io/react/img/logo_og.png'
      },
      {
        name: 'Vue',
        avatar: 'https://vuejs.org/images/logo.png'
      }
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Detail
        </Text>
        <Image
          style={{ width: '90%', height: '50%', marginTop: 10 }}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
        <Text style={{ marginTop: 10,marginLeft: 20 }}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8BC051',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  item: {
    // padding: 10,
    fontSize: 18,
    // height: 44,
  },
  listStyle: {
    width: '86%',
    marginTop: 10,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default DetailComponent;