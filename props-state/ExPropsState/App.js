import React, {Component} from 'react';
import {Platform, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component {
  // state = {
  //   cnt: 0,
  //   text: 'Text',
  // };
  constructor(props) {
    super(props);

    this.state = {
      cnt: 0,
      text: 'Text',
      props: 'props Test in state',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to dooboolab's lecture</Text>
        <Text>Props : {this.state.props}</Text>
        <Text>Hello. This is {this.state.text}</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              text: 'Changed Text!' + this.state.cnt++,
              props: 'Wow, Changed this data💗',
            });
          }}>
          <Text style={styles.changeText}>Change above when onPressed</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 20,
  },
  changeText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 24,
    color: '#ee5253',
    marginBottom: 5,
  },
});

export default App;
