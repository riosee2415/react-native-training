import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from './configColor';
import ComTextInput from './ComTextInput';
import ComButton from './ComButton';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('./assets/img/logo140x49.png')}
          />
        </TouchableOpacity>
        <Text style={styles.logoTxt}>Software Developer Team</Text>
        <ComTextInput ph="Input Your Email..." />
        <ComTextInput ph="Password" />
        <View style={styles.containerBtn}>
          <ComButton>Sgin In</ComButton>
          <View style={{width: 10}}></View>
          <ComButton>Sign Up</ComButton>
        </View>

        <View style={styles.containerCopy}>
          <Text style={styles.copyTxt}>
            @Copyrighter 🍀4LEAF Developer Team
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 50,
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '50%',
  },
  logo: {
    marginTop: 50,
  },
  logoTxt: {
    marginTop: 2,
    marginLeft: 5,
    color: colors.normalGray,
    marginBottom: '60%',
  },
  containerCopy: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  copyTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.normalGray,
  },
});

export default App;
