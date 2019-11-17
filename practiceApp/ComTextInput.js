import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import colors from './configColor';

class ComTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };
  }

  render() {
    const {focus} = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={
            focus
              ? [styles.commonInput, styles.inputFocus]
              : [styles.commonInput, styles.input]
          }
          placeholder={this.props.ph}
          onFocus={() => {
            this.setState({
              focus: true,
            });
          }}
          onBlur={() => {
            this.setState({
              focus: false,
            });
          }}
        />
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
  commonInput: {
    borderWidth: 1,
    padding: 10,
    width: 310,
    height: 60,
    fontSize: 20,
  },
  input: {
    borderColor: colors.normalGray,
  },
  inputFocus: {
    borderColor: colors.brightYellow,
  },
});

export default ComTextInput;
