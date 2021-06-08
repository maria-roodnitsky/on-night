import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, TextInput} from 'react-native';
import fotgotPassword from '../App';
import { Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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

  backgroundImg: {
    width: '100%',
    height: Dimensions.get("window").height*1.1,
    marginTop: -50,
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
    fontSize: 18,
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
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

class ForgotPw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emptyFields: false,
      invalidEmail: false,
    };
  }

  static navigationOptions = {
    title: 'ForgotPw',
  };

  onEmailChange = (event) => {
    this.setState({email: event});
    this.props.changeEmail(event);
  }

  forgotPwEmail = () => {
    let pCount = 0;
    if (this.state.email == ''){
    //   Alert.alert(
    //     'Email cannnot be empty.'
    // )
    this.setState({emptyFields: true});
    this.setState({invalidEmail: false});
    }

    else if ((pCount !== 3 || pCount !== 4) && !this.state.email.includes('@dartmouth.edu')) {

      // Alert.alert(
      //   'Invalid Email',
      //   'Email must be of the form first.middle-initial.last.year-or-gr@dartmouth.edu or first.last.year-or-gr@dartmouth.edu'
      // )
      this.setState({emptyFields: false});
      this.setState({invalidEmail: true});
    }
    else{
      const fields = { email: this.state.email};
      this.props.forgotPassword(fields);
      this.props.navigation.navigate("ForgotPasswordVerification");
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
        <Text style={styles.heading}>Forgot Password?</Text>
        <Text style={styles.body}>
        Hey, we get it! We all forget our passwords sometimes.
          Let us know how we can reach you so we can reset it for you.         </Text>
        <TextInput style={styles.input} onChangeText={e => this.onEmailChange(e.toLowerCase())} placeholder="DARTMOUTH EMAIL"/>
        {this.state.invalidEmail && <Text style={[styles.buttonTextError]} > Invalid Email! Email must be of the form first.middle-initial.last.year-or-gr@dartmouth.edu or first.last.year-or-gr@dartmouth.edu </Text>}
        {this.state.emptyFields && <Text style={[styles.buttonTextError]} > Sorry! Any field cannot be empty. </Text>}
        <TouchableOpacity style={styles.buttonContainer} onPress={this.forgotPwEmail}>
              <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>

        </ImageBackground>
      </SafeAreaView>
    );
  }
}


export default ForgotPw;