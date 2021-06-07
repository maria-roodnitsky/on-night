import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native';

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

class forgotPasswordVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  static navigationOptions = {
    title: 'forgotPasswordVerification',
  };

  accountVerified = () => {
      const fields = { email: this.state.email};
      this.props.forgotPasswordEmailVerification(fields);
      this.props.navigation.navigate("changePassword");
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
        <Text>Password Reset</Text>
        <Text>
        You should be receiving a confirmation email from us soon. If you do not receive an email from us, please try again with your official (no aliases please!) Dartmouth email. 
        </Text>
        <TouchableOpacity onPress={this.accountVerified}>
              <Text style={styles.buttonText}>I have Confirmed the Email</Text>
        </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}


export default forgotPasswordVerification;