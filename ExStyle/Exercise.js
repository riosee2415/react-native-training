/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class Exercise extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.wrapperCommon, styles.wrapper1]}>
          <View style={[styles.boxCommon, styles.box1]} />
          <View style={[styles.boxCommon, styles.box2]} />
          <View style={[styles.boxCommon, styles.box3]} />
        </View>
        <View style={[styles.wrapperCommon, styles.wrapper2]}>
          <View style={[styles.boxCommon, styles.box4]} />
          <View style={[styles.boxCommon, styles.box5]} />
        </View>
        <View style={[styles.wrapperCommon, styles.wrapper3]}>
          <View style={[styles.boxCommon, styles.box6]} />
          <View style={[styles.boxCommon, styles.box7]} />
          <View style={[styles.boxCommon, styles.box8]} />
          <View style={[styles.boxCommon, styles.box9]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    backgroundColor: '#fff',
  },
  wrapperCommon: {
    width: '100%',
    flexDirection: 'row',
  },
  wrapper1: {
    backgroundColor: 'red',
    flexBasis: 90,
  },
  wrapper2: {
    backgroundColor: 'blue',
    flexGrow: 1,
    flexBasis: 0,
  },
  wrapper3: {
    backgroundColor: 'green',
    flexBasis: 90,
  },
  boxCommon: {
    height: 90,
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
  },
  box2: {
    backgroundColor: 'blue',
  },
  box3: {
    backgroundColor: 'green',
  },
  box4: {
    backgroundColor: 'yellow',
    minHeight: '100%',
  },
  box5: {
    backgroundColor: 'orange',
    minHeight: '100%',
  },
  box6: {
    backgroundColor: 'orange',
    flex: 1,
  },
  box7: {
    backgroundColor: 'green',
    flex: 1,
  },
  box8: {
    backgroundColor: 'red',
    flex: 1,
  },
  box9: {
    backgroundColor: 'purple',
    flex: 1,
  },
});

export default Exercise;
