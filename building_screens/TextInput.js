import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, TextInput} from 'react-native';

const colors = {
  background: '#e3e3e3',
  dodgerBlue: 'rgb(58, 139, 255)',
  dusk: 'rgb(65, 77, 107)',
  cloudyBlue: 'rgb(175, 194, 219)',
  blueGray: 'rgb(134, 154, 183)',
  paleGray: 'rgb(233, 237, 244)',
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',

    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  label: {
    color: colors.blueGray,
    marginBottom: 8,
    fontSize: 12,
  },
  labelFocus: {
    color: colors.dodgerBlue,
    marginBottom: 8,
    fontSize: 12,
  },
  input: {
    alignSelf: 'stretch',
    color: colors.dusk,
    fontSize: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgb(223, 237, 244)',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputFocus: {
    alignSelf: 'stretch',
    color: colors.dusk,
    fontSize: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.dodgerBlue,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

class Shared extends Component {
  static defaultProps = {
    style: styles.wrapper,
    labelStyle: styles.label,
    labelStyleFocus: styles.labelFocus,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  render() {
    return (
      <View style={[styles.wrapper, this.props.style]}>
        {!!this.props.txtLabel ? (
          <Text style={this.state.focused ? styles.labelFocus : styles.label}>
            {this.props.txtLabel}
          </Text>
        ) : (
          <View />
        )}
        <TextInput
          style={[
            this.state.focused ? styles.inputFocus : styles.input,
            this.props.inputStyle,
          ]}
          multiline={this.props.multiline}
          onChangeText={this.props._onTextChanged}
          value={this.props.txt}
          onFocus={() => this.setState({focused: true})}
          onBlur={() => this.setState({focused: false})}
          placeholder={this.props.txtHint}
          placeholderTextColor={this.props.placeholderTextColor}
          secureTextEntry={this.props.password}
        />
      </View>
    );
  }
}

export default Shared;
