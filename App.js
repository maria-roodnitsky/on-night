import React, { Component } from 'react';
import MainTabBar from './navigation/main_tab_bar';
import Landing from './components/landing';
import {View, ViewPagerAndroidBase} from 'react-native';
import axios from 'axios';
import { fonts } from 'react-native-elements/dist/config';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import titlePage from './components/title_page';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Verification from './components/verification';
import ForgotPw from './components/forgot_pw'
import ForgotPasswordVerification from './components/forgotPasswordVerification';
import ChangePassword from './components/changePassword';
import { Alert } from 'react-native';

// disable really annoying in app warnings
console.disableYellowBox = true;
// LogBox.ignoreAllLogs(value)

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

const getFonts = () => Font.loadAsync({
  'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
  'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
  'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'IcoMoon': require('./assets/fonts/icomoon.ttf'),
});

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      activated: false,
      fontsLoaded: false,
      token: '',
      email: '',
      id:'',
    };
  }

  changeEmail = (email) => {
    this.setState({email});
  }

  changeId = (id) => {
    this.setState({id});
  }

  signup = (fields) => {
    console.log(fields);
    axios.post(`${ROOT_URL}/signup`, fields).then((response) => {
      this.setState({token: response.data.token});
    }).catch((error) => {
      Alert.alert("Hey! It looks like you already have an account. Please go back and sign in.")
      console.log(`Signup failed. Try again`);
    });
  }

  signin = (fields) => {
    console.log(fields);
    axios.post(`${ROOT_URL}/signin`, fields).then((response) => {


      // axios.post(`${ROOT_URL}/activate`, {email: fields.email}).then((response2) => {
      //   console.log(response2.data);
      //   if (response2.data.activated) {
      //     this.setState({ authenticated: true, token: response.data.token });
      //   } else {
      //     alert("Oops. looks like you haven't verified your email yet.");
      //   }
      // }).catch((error1) => {
      //   console.log("Activation failed. Try again");
      // });


      this.setState({ authenticated: true, token: response.data.token });
    }).catch((error) => {
      Alert.alert("Hey! Looks like your credentials are wrong or you do not have an account. Please try again!")
      console.log("Signin failed. Try again");
    });
  }

  activate = (fields) => {
    console.log(fields);
    axios.post(`${ROOT_URL}/activate`, {email: this.state.email}).then((response) => {
      console.log(response.data);
      if (response.data.activated) {
        this.setState({ authenticated: true});
      } else {
        Alert.alert("Oops. looks like you haven't verified your email yet.");
      }
    }).catch((error) => {
      console.log("Activation failed. Try again");
    });
  }

  forgotPassword = (fields) => {
    console.log(fields);
    axios.post(`${ROOT_URL}/reset/sendemail`, fields).then(() => {
      console.log("success");
    }).catch((error) => {
      Alert.alert("Hey! It looks like you do not have an account yet. Please go back and sign up.")
      console.log("Resetting Password failed1. Try again");
    });
  }

  // forgotPasswordEmailVerification = (fields) => {
  //   console.log({email: this.state.email});
  //   axios.post(`${ROOT_URL}/users/info`, {email: this.state.email}).then((response) => {
  //     console.log(response.data);
  //     // id: response.data.id;
  //     if (response.data.resettingPassword){
  //       this.props.navigation.navigate("changePassword");
  //     }
  //     else{
  //       alert("Oops. looks like you haven't verified your email yet.");
  //     }
  //   }).catch((error) => {
  //     console.log("Resetting Password failed2. Try again");
  //   });
  // }

  passwordReset = (fields) => {
    console.log(fields);
    console.log(this.state.id);
    axios.put(`${ROOT_URL}/users/${this.state.id}`, fields).then((response) => {
      console.log(response.data);
      this.setState({ authenticated: true});
    }).catch((error) => {
      console.log("Resetting Password failed3. Try again");
    });
  }


  render () {
    if (!this.state.fontsLoaded) {
      return (
        <AppLoading
          startAsync={getFonts}
          onError={console.warn}
          onFinish={() => this.setState({fontsLoaded: true})}
        />
      );
    } else {
      if (this.state.authenticated) {
        return <MainTabBar token={this.state.token} email={this.state.email}/>
      } else {
        // return <Landing signup={this.signup} signin={this.signin}/>
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="TitlePage"
                component={titlePage}
                options={{ 
                  title: '',
                  headerTransparent: true,
                }}
              />
              <Stack.Screen
                name="SignIn"
                options={{ 
                  title: '',
                  headerTransparent: true,
                  headerTintColor: "white",
                  headerStyle: {
                    height: 145, // Specify the height of your custom header
                  }
                }}
              >
                {/* {return <SignIn signin={this.signin}/>} */}
                {props => <SignIn {...props} signin={this.signin} changeEmail={this.changeEmail}/>}
              </Stack.Screen>
                            
              <Stack.Screen
                name="ForgotPw"
                options={{ 
                  title: '',
                  headerTransparent: true,
                  headerTintColor: "white",
                  headerStyle: {
                  height: 145, // Specify the height of your custom header
                                   }
                 }}
              >
                {props => <ForgotPw {...props} forgotPassword={this.forgotPassword} changeEmail={this.changeEmail}/>}
              </Stack.Screen>

              <Stack.Screen
                name="ForgotPasswordVerification"
                options={{ 
                  title: '',
                  headerTransparent: true,
                  headerTintColor: "white",
                  headerStyle: {
                  height: 170, // Specify the height of your custom header
                                   }
                 }}
              >
                {props => <ForgotPasswordVerification {...props} changeId={this.changeId} email={this.state.email} forgotPasswordEmailVerification={this.forgotPasswordEmailVerification}/>}
              </Stack.Screen>

              <Stack.Screen
                name="changePassword"
                children={() => <ChangePassword passwordReset={this.passwordReset}/>}
                options={{ 
                  title: '',
                  headerTransparent: true,
                  headerTintColor: "white",
                  headerStyle: {
                  height: 145, // Specify the height of your custom header
                                   }
                 }}
              >
              </Stack.Screen>

              <Stack.Screen
                name="SignUp"
                options={{ 
                 title: '',
                 headerTransparent: true,
                 headerTintColor: "white",
                 headerStyle: {
                 height: 145, // Specify the height of your custom header
                                  }
                }}
              >
                {props => <SignUp {...props} signup={this.signup} changeEmail={this.changeEmail}/>}
              </Stack.Screen>
              <Stack.Screen
                name="Verification"
                // component={Verification}
                children={() => <Verification activate={this.activate}/>}
                options={{ 
                  title: '',
                  headerTransparent: true,
                  headerTintColor: "white",
                  headerStyle: {
                  height: 145, // Specify the height of your custom header
                                   }
                 }}
              >
                {/* {props => <Verification {...props} activated={this.activate}/>} */}
                </Stack.Screen>

            </Stack.Navigator>
          </NavigationContainer>
        )
      }
    }
  }
}

export default App;