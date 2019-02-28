/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import BusinessViewController from './BusinessViewController.js';
import MyListItem from './ListItem.js';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var customData = require('./info.json');

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data = {customData}
          renderItem={({item}) => <Text style={styles.listitem} onPress={this.didSelectListItem.bind(this, item)} > {item.name} </Text>}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          keyExtractor = {(item, index) => index}
        />
      </View>
    )
  }

didSelectListItem (item) {
  Alert.alert(item.name);
}

FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#607D8B",
      }}
    />
  );
}

  // render() {
  //   return <BusinessViewController style={{ flex: 1 }}/>;
  // }
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>Welcome to React Native!</Text>
  //       <Text style={styles.instructions}>To get started, edit App.js</Text>
  //       <Text style={styles.instructions}>{instructions}</Text>
  //     </View>
  //   );
  // }
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
  mainView: {
    color: '#000000'
  },
  listitem: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 25,
    padding: 15,
    height: 50,
  }
});
