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
    width: '75%',
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
    width: '75%',
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
  footer: {
    marginTop: 200,
    alignSelf: "center",
  }
});

class SignIn extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
      };
    }

    onEmailChange = (event) => {
      this.setState({ email: event });
    }

    onPasswordChange = (event) => {
      this.setState({ password: event });
    }

    signedIn = () => {
      this.props.changeEmail(this.state.email);
      if (this.state.password == '' || this.state.email == ''){
        Alert.alert(
          'Fields cannnot be empty.'
      )
      }
      else{
        const fields = { email: this.state.email, password: this.state.password };
        this.props.signin(fields);
      }
    }

    renderSignIn = () => { 
        return (
          <View style={styles.container}>
            <Text style={styles.heading}> Sign In</Text>
            <TextInput style={[styles.input]}  autoCapitalize='none' onChangeText={e=>this.onEmailChange(e)} placeholder="EMAIL" placeholderTextColor="#ffffff"/>
            <TextBox
              onChangeText={e=>this.onPasswordChange(e)} 
              placeholder="PASSWORD"
              placeholderTextColor = "#ffffff"
              secureTextEntry={true}
              style= {[{color:"#ffff09"}]}
              containerStyles={[styles.input, {paddingRight:12, color:"#ffff09"}]
              }
            />
            <TouchableOpacity style={[styles.buttonContainer, {marginTop:40, marginBottom: 20}]} onPress={this.signedIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("ForgotPw")}}>
              <Text style={[styles.buttonText]}>Forgot your password?</Text>
            </TouchableOpacity>
            <View style={[{flexDirection: 'row', alignSelf: "center", marginTop: 220}]} >
            <Text style={[styles.buttonText, {color: "#ffffff90"}]}>Need an account?</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("SignUp")}}>
              <Text style={[styles.buttonText, {fontFamily: 'Comfortaa-Bold', marginLeft: 5, fontSize: 14, marginTop: -3}]}>Sign Up!</Text>
            </TouchableOpacity>
            </View>

          </View>
        )
    }
  
    render () {
        return (
            <SafeAreaView style={{marginTop: -20}}>
              <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
                {this.renderSignIn()}
              </ImageBackground>
            </SafeAreaView>
        );
    }
  }

export default SignIn;