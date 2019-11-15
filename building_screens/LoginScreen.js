import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import TextInput from './TextInput';
import Button from './Button';

const colors = {
  background: '#e3e3e3',
  dodgerBlue: 'rgb(58, 139, 255)',
  dusk: 'rgb(65, 77, 107)',
  cloudyBlue: 'rgb(175, 194, 219)',
  blueGray: 'rgb(134, 154, 183)',
  paleGray: 'rgb(233, 237, 244)',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoadingin: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Image style={styles.icon} source={require('./assets/symbol.png')} />
          <Text style={styles.iconText}>Hello.</Text>
        </View>

        <View style={styles.wrapper}>
          <View style={styles.wrapperInput}>
            <TextInput
              txtLabel="email"
              style={{marginTop: 60}}
              txt={this.state.email}
              txtHint="Please write email adderss"
              placeholderTextColor={colors.blueGray}
              _onTextChanged={text => this._onTextChanged('EMAIL', text)}
            />

            <TextInput
              txtLabel="password"
              style={{marginTop: 8}}
              txt={this.state.password}
              txtHint="Please write password"
              placeholderTextColor={colors.blueGray}
              _onTextChanged={text => this._onTextChanged('PASSWORD', text)}
              password={true}
            />
          </View>

          <View style={styles.viewBtnWrapper}>
            <Button
              containerStyle={{flex: 1}}
              onPress={() => {}}
              style={styles.btnSignup}
              textStyle={styles.txtSignup}>
              Sign Up
            </Button>
            <View style={{width: 8}} />
            <Button
              containerStyle={{flex: 1}}
              isLoading={this.state.isLoadingin}
              onPress={() => {
                this.setState(
                  {
                    isLoadingin: true,
                  },
                  () => {
                    setTimeout(() => {
                      this.setState({
                        isLoadingin: false,
                      });
                    }, 3000);
                  },
                );
              }}
              style={styles.btnLogin}
              textStyle={styles.txtLogin}>
              Sign In
            </Button>
          </View>

          <TouchableOpacity style={styles.touchForgotPw}>
            <Text style={styles.txtForgotPw}>Forgot Password?</Text>
          </TouchableOpacity>

          <Text style={styles.txtCopyright}>copyright by 4leaf.ysh</Text>
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
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  iconWrapper: {
    position: 'absolute',
    top: 144,
    left: 40,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    width: 60,
    height: 48,
  },
  iconText: {
    fontSize: 20,
    color: colors.dusk,
    marginTop: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    marginTop: 260,
    width: '78%',
    height: 300,
    alignSelf: 'center',

    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapperInput: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  input: {
    alignSelf: 'stretch',
    color: colors.dodgerBlue,
    fontSize: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.paleGray,
  },
  touchForgotPw: {
    marginTop: 20,
  },
  txtForgotPw: {
    fontSize: 12,
    color: colors.dodgerBlue,
    textDecorationLine: 'underline',
  },
  viewBtnWrapper: {
    alignSelf: 'stretch',
    marginTop: 20,
    height: 60,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnSignup: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderWidth: 1,
    height: '100%',
    width: '100%',
    borderColor: colors.dodgerBlue,

    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSignup: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dodgerBlue,
  },
  btnLogin: {
    backgroundColor: colors.dodgerBlue,
    borderColor: colors.dodgerBlue,
    borderRadius: 4,
    borderWidth: 1,
    height: 60,
    color: colors.cloudyBlue,
    shadowColor: colors.dodgerBlue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,

    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLogin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  txtCopyright: {
    marginTop: 80,
    fontSize: 12,
    color: colors.blueGray,
  },
});

export default App;
