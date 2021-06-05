import React, { Component } from 'react';
import MainTabBar from './navigation/main_tab_bar';
import Landing from './components/landing';
import {View} from 'react-native';
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

// disable really annoying in app warnings
console.disableYellowBox = true;

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

const getFonts = () => Font.loadAsync({
  'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
  'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf')
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
    };
  }

  signup = (fields) => {
    console.log(fields);
    axios.post(`${ROOT_URL}/signup`, fields).then((response) => {
      this.setState({token: response.data.token});
    }).catch((error) => {
      console.log(`Signup failed. Try again`);
    });
  }

  signin = (fields) => {
    console.log(fields);
    axios.post(`${ROOT_URL}/signin`, fields).then((response) => {
      this.setState({ authenticated: true, token: response.data.token });
    }).catch((error) => {
      console.log("Signin failed. Try again");
    });
  }

  activate = (fields) => {
    console.log(fields);
    axios.post(`${ROOT_URL}/activate`, fields).then((response) => {
      this.setState({ activated: true, authenticated: true});
    }).catch((error) => {
      console.log("Activation failed. Try again");
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
        return <MainTabBar token={this.state.token}/>
      } else {
        // return <Landing signup={this.signup} signin={this.signin}/>
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="TitlePage"
                component={titlePage}
                options={{ 
                  title: 'On Night',
                  headerTransparent: true,
                }}
              />
              <Stack.Screen
                name="SignIn"
                options={{ 
                  headerTransparent: true,
                }}
              >
                {/* {return <SignIn signin={this.signin}/>} */}
                {props => <SignIn {...props} signin={this.signin}/>}
              </Stack.Screen>
              <Stack.Screen
                name="SignUp"
                options={{ 
                  headerTransparent: true,
                }}
              >
                {props => <SignUp {...props} signup={this.signup}/>}
              </Stack.Screen>
              <Stack.Screen
                name="Verification"
                component={Verification}
              />
              <Stack.Screen
                name="ForgotPW"
                component={ForgotPw}
              />
            </Stack.Navigator>
          </NavigationContainer>
        )
      }
    }
  }
}

export default App;