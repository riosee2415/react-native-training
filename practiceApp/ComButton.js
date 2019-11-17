import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from './configColor';

class ComButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>{this.props.children}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn: {
    width: 150,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.btnBlack,
    opacity: 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ComButton;
