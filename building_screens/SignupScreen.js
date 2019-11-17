import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from './Button';
import TextInput from './TextInput';

const colors = {
  background: '#e3e3e3',
  dodgerBlue: 'rgb(58, 139, 255)',
  dusk: 'rgb(65, 77, 107)',
  cloudyBlue: 'rgb(175, 194, 219)',
  blueGray: 'rgb(134, 154, 183)',
  paleGray: 'rgb(233, 237, 244)',
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      statusMsg: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            style={{marginTop: 8}}
            txtLabel="EMAIL"
            txtHint="Please write email."
            txt={this.state.email}
            _onTextChanged={text => {
              this._onTextChanged('EMAIL', text);
            }}
          />

          <TextInput
            style={{marginTop: 24}}
            txtLabel="PASSWORD"
            txtHint="Please write password."
            txt={this.state.password}
            _onTextChanged={text => {
              this._onTextChanged('PASSWORD', text);
            }}
            password
          />

          <TextInput
            style={{marginTop: 24}}
            txtLabel="name"
            txtHint="Please write name."
            txt={this.state.name}
            _onTextChanged={text => {
              this._onTextChanged('NAME', text);
            }}
          />

          <TextInput
            style={{marginTop: 24}}
            txtLabel="STATUS MESSAGE"
            txtHint="Please write status message."
            txt={this.state.statusMsg}
            _onTextChanged={text => {
              this._onTextChanged('MESSAGE', text);
            }}
          />

          <View style={styles.btnWrapper}>
            <Button
              isLoading={this.setState.isLoading}
              onPress={() => {}}
              style={styles.btnRegister}
              textStyle={styles.txtRegister}>
              Register
            </Button>
          </View>
        </View>
      </View>
    );
  }

  _onTextChanged = (type, text) => {
    switch (type) {
      case 'EMAIL':
        this.setState({
          email: text,
        });
        break;
      case 'PASSWORD':
        this.setState({
          password: text,
        });
        break;
      case 'NAME':
        this.setState({
          name: text,
        });
        break;
      case 'MESSAGE':
        this.setState({
          statusMsg: text,
        });
        break;
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  wrapper: {
    marginTop: 40,
    width: '78%',

    flexDirection: 'column',
    alignItems: 'center',
  },
  btnWrapper: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  btnRegister: {
    backgroundColor: colors.dodgerBlue,
    borderColor: colors.dodgerBlue,
    borderRadius: 4,
    borderWidth: 1,
    width: 136,
    height: 60,
    marginLeft: 4,
    marginTop: 24,
    marginBottom: 48,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,

    alignItems: 'center',
    justifyContent: 'center',
  },
  txtRegister: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Signup;
