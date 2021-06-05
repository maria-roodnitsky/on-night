import color from 'color';
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Text, View, Button, TextInput, SafeAreaView, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import signin from '../App';
import signup from '../App';
import PasswordInputText from 'react-native-hide-show-password-input';
import { Icon } from 'react-native-elements';
import TextBox from 'react-native-password-eye'; 

const styles = StyleSheet.create({
  container: {
  },
  input: {
    height: 45,
    margin: 20,
    backgroundColor: '#ffffff80',
    borderRadius: 8, 
    textAlign: 'left',
    paddingLeft: 16,
    fontFamily: 'Open-Sans',
    textTransform: "uppercase"
  },
  inputIcon : {
    flex: 1,
    flexDirection: 'row',
  
  },  
  heading: {
    fontSize: 32,
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginTop: Dimensions.get("window").height * .1,
  },
  title: {
    fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Open-Sans',
    color: 'white'
  },
  question: {
    fontSize: 16,
    margin: 25,
    color: 'white',
    fontFamily: 'Comfortaa-Regular'
  },
  backgroundImg: {
    width: '100%',
    height: Dimensions.get("window").height,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#A9469F',
    width: '50%',
    padding: 10,
    borderRadius: 20, 
    margin: 10,
    opacity: .8,
    borderWidth: 2,
    borderColor:'#A9469F',
  },
  secondaryButtonContainer: {
    alignSelf: 'center',
    backgroundColor: '#A9469F',
    width: '50%',
    padding: 10,
    borderRadius: 20, 
    margin: 10,
    opacity: .6,
    borderWidth: 2,
    borderColor:'#A9469F',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Open-Sans', 
    textTransform: "uppercase"
  }
});

class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        signup: false,
        firstName: '',
        lastName: '',
        classYear: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    }


    storeData = async () => {
      try {
        await AsyncStorage.setItem('email', this.state.email)
      } catch (e) {
        // saving error
      }
    }

    onfirstNameChange = (event) => {
        this.setState( {firstName: event });
      }
    onlastNameChange = (event) => {
        this.setState({ lastName: event });
      }
    onclassYearChange = (event) => {
        this.setState({ classYear: event });
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
        let pCount = 0;
        for (const char of this.state.email) {
            if (char == '.') {
                pCount += 1;
            }
        }
        let classYear = 2000;
        let yearStr = "";
        for (let i = 0; i < this.state.email.length; i += 1) {
          if (this.state.email[i] == "@") {
            yearStr = this.state.email[i-2] + this.state.email[i-1]
          }
        }
        let first = "";
        let last = "";
        let pc = 0;
        for (let character of this.state.email) {
          if (character == '.') {
            pc += 1;
          } else if (pc == 0){
            first += character;
          } else if (pc == pCount - 2) {
            last += character
          }
        }
        classYear += parseInt(yearStr);
        if (this.state.password == '' || this.state.email == '' || this.state.confirmPassword == ''){
          Alert.alert(
            'Fields cannnot be empty.'
        )
        }
        else if ((pCount !== 3 || pCount !== 4) && !this.state.email.includes('@dartmouth.edu')) {

          Alert.alert(
            'Invalid Email',
            'Email must be of the form first.middle-initial.last.year-or-gr@dartmouth.edu or first.last.year-or-gr@dartmouth.edu'
          )
        }
        else if (this.state.password != this.state.confirmPassword){
          Alert.alert(
            'Passwords do not match'
        )
        }
        else {
          const fields = { firstName: first, lastName: last, classYear: classYear, email: this.state.email, password: this.state.password, house: "none", sex: "N/A", permission: "none" };
          // const fields = { email: this.state.email, password: this.state.password };
          this.props.signup(fields);
          this.props.navigation.navigate("Verification");
        }
    }

    renderSignUp = () => { 
        return (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
            >
              <ScrollView style={styles.container}>
                <Text style={styles.heading}> Sign Up</Text>
                <TextInput style={styles.input} onChangeText={e=>this.onEmailChange(e)} placeholder="DARTMOUTH EMAIL"/>
                <TextBox
                  onChangeText={e=>this.onPasswordChange(e)} 
                  secureTextEntry={true}
                  containerStyles={[styles.input]}
                  placeholder="PASSWORD"
                />
                <TextBox
                  onChangeText={e=>this.onConfirmPasswordChange(e)} 
                  secureTextEntry={true}
                  containerStyles={[styles.input]}
                  placeholder="CONFIRM PASSWORD"
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.signedUp}>

                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.question}>Already have an account?</Text>
                <TouchableOpacity style={styles.secondaryButtonContainer} onPress={() => {this.props.navigation.navigate("SignIn")}}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={{marginTop: 40}}/>
              </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    
    render () {
        return (
            <SafeAreaView>
              <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
                {this.renderSignUp()}
              </ImageBackground>
            </SafeAreaView>
        );
    }
  }

export default SignUp;