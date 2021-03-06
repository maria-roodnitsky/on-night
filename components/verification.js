import React, { Component } from 'react';
import {
  SafeAreaView, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  backgroundImg: {
    width: '100%',
    height: Dimensions.get('window').height * 1.1,
    marginTop: -50,
  },

  heading: {
    fontSize: 32,
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginTop: Dimensions.get('window').height * 0.15,
  },

  body: {
    fontSize: 20,
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
    opacity: 0.8,
    borderWidth: 2,
    borderColor: '#A9469F',
  },
  secondaryButtonContainer: {
    alignSelf: 'center',
    backgroundColor: '#A9469F',
    width: '50%',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    opacity: 0.6,
    borderWidth: 2,
    borderColor: '#A9469F',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Open-Sans',
    textTransform: 'uppercase',
  },
});

class Verification extends Component {
  static navigationOptions = {
    title: 'Verification',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  activated = () => {
    const fields = { email: this.state.email };
    this.props.activate(fields);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
          <Text style={styles.heading}>Verification</Text>
          <Text style={styles.body}>
            Please Check Your Spam Folder.
            You should soon receive an email authorizing you to sign in to OnNight!
          </Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={this.activated}>
            <Text style={styles.buttonText}>I have Confirmed the Email</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Verification;
