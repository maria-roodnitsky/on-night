import React, { Component } from 'react';
import {
  Text, Platform, View, TextInput, SafeAreaView, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView,
} from 'react-native';
import TextBox from 'react-native-password-eye';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  input: {
    height: 45,
    margin: 20,
    backgroundColor: '#ffffff80',
    borderRadius: 8,
    textAlign: 'left',
    paddingLeft: 16,
    fontFamily: 'Open-Sans',
    textTransform: 'uppercase',
  },
  inputIcon: {
    flex: 1,
    flexDirection: 'row',

  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginTop: Dimensions.get('window').height * 0.1,
  },
  title: {
    fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Open-Sans',
    color: 'white',
  },
  question: {
    fontSize: 16,
    margin: 25,
    color: 'white',
    fontFamily: 'Comfortaa-Regular',
    textAlign: 'center',
  },
  backgroundImg: {
    width: '100%',
    height: Dimensions.get('window').height * 1.1,
    marginTop: -30,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#A9469F',
    width: '75%',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    opacity: 0.8,
    borderWidth: 2,
    borderColor: '#A9469F',
  },
  buttonTextError: {
    textAlign: 'center',
    color: 'red',
    fontFamily: 'Open-Sans',
  },
  secondaryButtonContainer: {
    alignSelf: 'center',
    backgroundColor: '#A9469F',
    width: '75%',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    opacity: 0.6,
    borderWidth: 2,
    borderColor: '#A9469F',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Open-Sans',
    textTransform: 'uppercase',
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      emptyFields: false,
      invalidEmail: false,
      passwordMatch: false,
    };
  }

    onEmailChange = (event) => {
      this.setState({ email: event });
    }

    onPasswordChange = (event) => {
      this.setState({ password: event });
    }

    onConfirmPasswordChange = (event) => {
      this.setState({ confirmPassword: event });
    }

    signedUp = () => {
      this.props.changeEmail(this.state.email);
      let pCount = 0;
      for (const char of this.state.email) {
        if (char == '.') {
          pCount += 1;
        }
      }
      let classYear = 2000;
      let yearStr = '';
      for (let i = 0; i < this.state.email.length; i += 1) {
        if (this.state.email[i] == '@') {
          yearStr = this.state.email[i - 2] + this.state.email[i - 1];
        }
      }
      let first = '';
      let last = '';
      let pc = 0;
      for (const character of this.state.email) {
        if (character == '.') {
          pc += 1;
        } else if (pc == 0) {
          first += character;
        } else if (pc == pCount - 2) {
          last += character;
        }
      }

      // eslint-disable-next-line radix
      classYear += parseInt(yearStr);
      if (this.state.password == '' || this.state.email == '' || this.state.confirmPassword == '') {
        this.setState({ emptyFields: true });
        this.setState({ invalidEmail: false });
        this.setState({ passwordMatch: false });
      } else if ((pCount !== 3 && pCount !== 4) || !this.state.email.includes('@dartmouth.edu')) {
        this.setState({ emptyFields: false });
        this.setState({ invalidEmail: true });
        this.setState({ passwordMatch: false });
      } else if (this.state.password != this.state.confirmPassword) {
        this.setState({ emptyFields: false });
        this.setState({ invalidEmail: false });
        this.setState({ passwordMatch: true });
      } else {
        let name = '';
        let currCount = 0;
        let i = 0;
        while (currCount <= pCount - 2) {
          if (this.state.email[i] == '.') {
            if (currCount != pCount - 2) {
              name += ' ';
            }
            currCount += 1;
          } else {
            name += this.state.email[i];
          }
          i += 1;
        }
        const fields = {
          firstName: first, lastName: last, classYear, email: this.state.email, password: this.state.password, house: 'none', sex: 'N/A', permission: 'none', name,
        };
        this.props.signup(fields);
        this.props.navigation.navigate('Verification');
      }
    }

    renderSignUp = () => {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView style={styles.container}>
            <Text style={styles.heading}> Sign Up</Text>
            <TextInput style={styles.input} autoCapitalize="none" placeholderTextColor="#ffffff" onChangeText={(e) => this.onEmailChange(e.toLowerCase())} placeholder="DARTMOUTH EMAIL" />
            {this.state.invalidEmail && <Text style={[styles.buttonTextError]}> Invalid Email! Email must be of the form first.middle-initial.last.year-or-gr@dartmouth.edu or first.last.year-or-gr@dartmouth.edu </Text>}
            <TextBox
              onChangeText={(e) => this.onPasswordChange(e)}
              secureTextEntry
              placeholder="PASSWORD"
              placeholderTextColor="#ffffff"
              containerStyles={[styles.input, { paddingRight: 12, color: '#ffffff' }]}
            />
            <TextBox
              onChangeText={(e) => this.onConfirmPasswordChange(e)}
              secureTextEntry
              placeholder="CONFIRM PASSWORD"
              placeholderTextColor="#ffffff"
              containerStyles={[styles.input, { paddingRight: 12, marginTop: 0 }]}
            />
            {this.state.emptyFields && <Text style={[styles.buttonTextError]}> Sorry! Any field cannot be empty. </Text>}
            {this.state.passwordMatch && <Text style={[styles.buttonTextError]}> Sorry! Passwords must match. </Text>}

            <TouchableOpacity style={[styles.buttonContainer, { marginTop: 40 }]} onPress={this.signedUp}>

              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={[{ flexDirection: 'row', alignSelf: 'center', marginTop: 150 }]}>
              <Text style={[styles.buttonText, { color: '#ffffff90' }]}>Already have an account?</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignIn'); }}>
                <Text style={[styles.buttonText, { marginLeft: 5 }]}>Sign In!</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 40 }} />
          </ScrollView>
        </KeyboardAvoidingView>
      );
    }

    render() {
      return (
        <SafeAreaView style={{ marginTop: -20 }}>
          <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
            {this.renderSignUp()}
          </ImageBackground>
        </SafeAreaView>
      );
    }
}

export default SignUp;
