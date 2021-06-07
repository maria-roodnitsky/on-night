import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, TextInput} from 'react-native';
import fotgotPassword from '../App';

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

class ForgotPw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  static navigationOptions = {
    title: 'ForgotPw',
  };

  onEmailChange = (event) => {
    this.setState({email: event});
  }

  forgotPwEmail = () => {
    let pCount = 0;
    if ((pCount !== 3 || pCount !== 4) && !this.state.email.includes('@dartmouth.edu')) {

      Alert.alert(
        'Invalid Email',
        'Email must be of the form first.middle-initial.last.year-or-gr@dartmouth.edu or first.last.year-or-gr@dartmouth.edu'
      )
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
        <Text>Forgot Password?</Text>
        <Text>
        Hey, we get it! We all forget out passwords sometimes.
          Let us know how we can reach you so we can reset it for you.         </Text>
        <TextInput style={styles.input} onChangeText={e => this.onEmailChange(e)} placeholder="DARTMOUTH EMAIL"/>
        <TouchableOpacity onPress={this.forgotPwEmail}>
              <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}


export default ForgotPw;