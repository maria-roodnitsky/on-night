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
    opacity: .6,
    backgroundColor: '#F6F6F6',
    borderRadius: 8, 
    textAlign: 'left',
    paddingLeft: 16,
    fontFamily: 'Open-Sans',
    fontWeight: 'normal', 
    textTransform: "uppercase"
  },
  inputIcon : {
    flex: 1,
    flexDirection: 'row',
  
  },  
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white'
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
    color: 'red',
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
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Open-Sans', 
    textTransform: "uppercase"
  }
});

class Landing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        signup: false,
        firstName: '',
        lastName: '',
        classYear: '',
        email: '',
        password: '',
      };
    }

    switch = () => {
        this.setState({signup: !this.state.signup});
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

    signedIn = () => {
        const fields = { email: this.state.email, password: this.state.password };
        this.props.signin(fields);
    }

    signedUp = () => {
        let pCount = 0;
        for (const char of this.state.email) {
            if (char == '.') {
                pCount += 1;
            }
        }
        if ((pCount == 3 || pCount == 4) && this.state.email.includes('@dartmouth.edu')) {
            const fields = { firstName: this.state.firstName, lastName: this.state.lastName, classYear: parseInt(this.state.classYear), email: this.state.email, password: this.state.password, house: "none", sex: "N/A", permission: "none" };
            // const fields = { email: this.state.email, password: this.state.password };
            this.props.signup(fields);
        } else {
            Alert.alert(
                'Invalid Email',
                'Email must be of the form first.middle-initial.last.year-or-gr@dartmouth.edu or first.last.year-or-gr@dartmouth.edu'
            )
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
                <Text style={styles.title}> First Name </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onlastNameChange(e)} />
                <Text style={styles.title}> Last Name </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onfirstNameChange(e)} />
                <Text style={styles.title}> Class Year </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onclassYearChange(e)} />
                <Text style={styles.title}> Email </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onEmailChange(e)}/>
                <Text style={styles.title}> Password </Text>
                {/* <TextInput style={styles.input} onChangeText={e=>this.onPasswordChange(e)} secureTextEntry={true}/> */}
                <TextBox
                  onChangeText={e=>this.onPasswordChange(e)} 
                  secureTextEntry={true}
                  containerStyles={[styles.input]}
                />

                {/* <Button title="Sign Up NOW" onPress={this.signedUp} /> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={this.signedUp}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.question}>Already have an account?</Text>

                {/* <Button title="Sign In"onPress={this.switch} /> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={this.switch}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
              </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    
    renderSignIn = () => { 
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Sign In</Text>
                <TextInput style={styles.input} onChangeText={e=>this.onEmailChange(e)} placeholder="EMAIL"/>
                {/* <TextInput style={styles.input} onChangeText={e=>this.onPasswordChange(e)} secureTextEntry={true} placeholder="PASSWORD"/> */}
                <TextBox
                  onChangeText={e=>this.onPasswordChange(e)} 
                  placeholder="PASSWORD"
                  secureTextEntry={true}
                  containerStyles={[styles.input]}
                />
                {/* <PasswordInputText style={styles.input2} onChangeText={e=>this.onPasswordChange(e)} /> */}
                
                {/* <Button title="Sign In NOW" onPress={this.signedIn} backgroundColor="red"/> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={this.signedIn}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.question}>Don't Have an account?</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.switch}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={{ flex : 1 }} />
            </View>
        )
    }
  
    render () {
        return (
            <SafeAreaView>
              <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
                {this.state.signup && this.renderSignUp()}
                {!this.state.signup && this.renderSignIn()}
              </ImageBackground>
            </SafeAreaView>
        );
    }
  }

export default Landing;