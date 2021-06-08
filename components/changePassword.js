import color from 'color';
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Text, View, Button, TextInput, SafeAreaView, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import signin from '../App';
import signup from '../App';
import PasswordInputText from 'react-native-hide-show-password-input';
import { Icon } from 'react-native-elements';
import TextBox from 'react-native-password-eye'; 
import passwordReset from '../App';

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
    fontFamily: 'Comfortaa-Regular',
    textAlign: 'center'
  },
  backgroundImg: {
    width: '100%',
    height: Dimensions.get("window").height*1.1,
    marginTop: -50,
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
  }, 
  buttonTextError: {
    textAlign: 'center',
    color: 'red',
    fontFamily: 'Open-Sans', 
  },
});

class ChangePassword extends Component {
    constructor(props) {
      super(props);
      this.state = {
        password: '',
        confirmPassword: '',
        emptyFields: false,
        passwordMatch: false,
      };
    }

    static navigationOptions = {
        title: 'changePassword',
    };

    onPasswordChange = (event) => {
        this.setState({ password: event });
      }
    onConfirmPasswordChange = (event) => {
        this.setState({ confirmPassword: event });
      }

    passwordChanged = () => {
      if (this.state.password == '' || this.state.confirmPassword == ''){
      //   Alert.alert(
      //     'Passwords cannnot be empty.'
      // )
      this.setState({emptyFields: true});
      this.setState({passwordMatch: false});
      }  
      else if (this.state.password != this.state.confirmPassword){
        //   Alert.alert(
        //     'Passwords do not match'
        // )
        this.setState({emptyFields: false});
        this.setState({passwordMatch: true});
        }
        else {
          const fields = { password: this.state.password};
          this.props.passwordReset(fields, this.props.email);
        }
    }

    renderChangePassword = () => { 
        return (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1, marginTop: 30, }}
            >
              <ScrollView style={styles.container}>
                <Text style={styles.heading}> New Password</Text>
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
                {this.state.emptyFields && <Text style={[styles.buttonTextError]} > Sorry! Any field cannot be empty. </Text>}
                {this.state.passwordMatch && <Text style={[styles.buttonTextError]} > Sorry! Passwords must match. </Text>}
                <TouchableOpacity style={styles.buttonContainer} onPress={this.passwordChanged}>

                  <Text style={styles.buttonText}>Reset Password</Text>
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
                {this.renderChangePassword()}
              </ImageBackground>
            </SafeAreaView>
        );
    }
  }

export default ChangePassword;