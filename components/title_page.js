import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions,
} from 'react-native';
import Logo from '../img/logo.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: -20,
  },
  image_box: {
    marginTop: Dimensions.get('window').height * 0.15,
    marginBottom: Dimensions.get('window').height * 0.05,
    alignSelf: 'center',
  },
  backgroundImg: {
    width: '100%',
    height: Dimensions.get('window').height * 1.1,
    marginTop: -30,
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#A9469F',
    width: '75%',
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
    width: '75%',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    opacity: 0.6,
    borderWidth: 2,
    borderColor: '#A9469F',
  },
  main_heading: {
    fontSize: 65,
    textAlign: 'center',
    marginBottom: Dimensions.get('window').height * 0.1,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Open-Sans',
    textTransform: 'uppercase',
  },
});

class TitlePage extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
          <View style={{ marginTop: 30 }}>
            <View style={styles.image_box}>
              <Logo height={175} width={175} />
            </View>
            <Text style={styles.main_heading}>OnNight</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('SignIn'); }}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButtonContainer} onPress={() => { this.props.navigation.navigate('SignUp'); }}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default TitlePage;
