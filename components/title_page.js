import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
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

class TitlePage extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
        <Text>Title Page</Text>
        <TouchableOpacity style={styles.secondaryButtonContainer} onPress={() => {this.props.navigation.navigate("SignIn")}}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButtonContainer} onPress={() => {this.props.navigation.navigate("SignUp")}}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}


export default TitlePage;