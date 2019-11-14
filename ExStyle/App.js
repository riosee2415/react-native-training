/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#0b0b0b',
    //flexWrap: 'wrap', // wrap, no-wrap
    flexWrap: 'nowrap', // 사이즈가 커져도 안밀림
  },
  box1: {
    height: 70,
    flexBasis: 70,
    flexGrow: 1,
    backgroundColor: 'red',
  },
  box2: {
    height: 70,
    flexBasis: 70,
    flexGrow: 1,
    backgroundColor: 'blue',
  },
  box3: {
    height: 70,
    flexBasis: 70,
    backgroundColor: 'yellow',
  },
});

export default App;
