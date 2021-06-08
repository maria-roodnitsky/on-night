import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import forgotPasswordEmailVerification from '../App';
import { Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  heading: {
    fontSize: 32,
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginTop: Dimensions.get("window").height * .15,
  },

  body: {
    fontSize: 20,
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
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

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

class ForgotPasswordVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      verified: false,
    };
  }

  static navigationOptions = {
    title: 'ForgotPasswordVerification',
  };

  accountVerified = () => {
      const fields = { email: this.state.email};
      // this.props.forgotPasswordEmailVerification(fields);
      this.forgotPasswordEmailVerification(fields);

  }

  forgotPasswordEmailVerification = (fields) => {
    console.log({email: this.props.email});
    axios.post(`${ROOT_URL}/users/info`, {email: this.props.email}).then((response) => {
      console.log(response.data);
      this.props.changeId(response.data.user._id);
      if (response.data.user.resettingPassword){
        this.props.navigation.navigate("changePassword");
      }
      else{
        // Alert.alert("Oops. looks like you haven't verified your email yet.");
        this.setState({verified: true});
      }
    }).catch((error) => {
      Alert.alert("Hey! It looks like you do not have an account yet. Please go back and sign up.")
      console.log("Resetting Password failed2. Try again");
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
        <Text style={styles.heading}> Password Reset</Text>
        <Text style={styles.body}>
        Please check your spam folder. You should be receiving a confirmation email from us soon. If you do not receive an email from us, please try again with your official (no aliases please!) Dartmouth email. 
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.accountVerified}>
              <Text style={styles.buttonText}>I have Confirmed the Email</Text>
        </TouchableOpacity>
        {this.state.verified && <Text style={[styles.buttonTextError]} > Oops. looks like you haven't verified your email yet. </Text>}
        </ImageBackground>
      </SafeAreaView>
    );
  }
}


export default ForgotPasswordVerification;