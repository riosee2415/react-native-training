import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class AboutStyle extends Component {
  render() {
    return (
      <View style={styles.constainer}>
        <View style={styles.view} />
        <Text style={styles.text}>Hello</Text>
        <Image style={styles.img} source={require('./assets/pg1.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  view: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
  },
  text: {
    height: 200,
    width: 200,
    backgroundColor: 'blue',
  },
  img: {
    height: 200,
    width: 200,
    opacity: 0.5,
  },
});

export default AboutStyle;
