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
  Image,
  Button,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


class AboutComponent extends Component {
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
  showDetails() {
    Actions.detail();
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
          About
        </Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {
            users.map((u, i) => {
              return (
                <View key={i} onPress={this.showDetails}>
                  <Card
                    title={u.name}
                    image={{ uri: u.avatar }}>
                    <Text style={{ marginBottom: 10 }}>
                      The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                      onPress={this.showDetails}
                      title="Learn More"
                      color="#7c8e68"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </Card>
                </View>
              );
            })
          }

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

export default AboutComponent;