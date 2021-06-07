import color from 'color';
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Text, View, Button, TextInput, SafeAreaView, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import signin from '../App';
import signup from '../App';
import PasswordInputText from 'react-native-hide-show-password-input';
import { Icon } from 'react-native-elements';
import TextBox from 'react-native-password-eye'; 
import ThemedListItem from 'react-native-elements/dist/list/ListItem';


const styles = StyleSheet.create({
  container: {
      paddingTop: 50,
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
  inputIcon : {
    flex: 1,
    flexDirection: 'row',
  
  },  
  heading: {
    fontSize: 32,
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginTop: Dimensions.get("window").height * .1,
  },
  title: {
    fontSize: 17,
    marginLeft: 15,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    margin: 25,
    color: 'white',
    fontFamily: 'Comfortaa-Regular'
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
  },
  footer: {
    marginTop: 200,
    alignSelf: "center",
  }
});

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }

    renderAdmin = () => {
        if (this.props.user.permission != 'none') {
            return (
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigation.navigate("Portal")}}>
                    <Text style={styles.buttonText}>Admin Portal</Text>
                </TouchableOpacity>
            );
        }
    }

    renderProfile = () => { 
        if (this.props.user == null) {
            return (
                <View style={styles.container}>
                    <Text style={styles.heading}> Loading </Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                  <Text style={styles.title}>Name: {this.props.user.name}</Text>
                  <Text style={styles.title}>Class Year: {this.props.user.classYear}</Text>
                  <Text style={styles.title}>Greek Affiliation: {this.props.user.house}</Text>
                  <Text style={styles.title}>Email: {this.props.user.email}</Text>
                  {/* <TextInput style={styles.input}  placeholder="EMAIL"/> */}
                  {/* <TextInput style={styles.input} onChangeText={e=>this.onPasswordChange(e)} secureTextEntry={true} placeholder="PASSWORD"/> */}
                  {/* <TextBox
                    placeholder="PASSWORD"
                    secureTextEntry={true}
                    containerStyles={[styles.input]}
                  /> */}
                  {/* <PasswordInputText style={styles.input2} onChangeText={e=>this.onPasswordChange(e)} /> */}
      
                  {/* <Button title="Sign In NOW" onPress={this.signedIn} backgroundColor="red"/> */}
                  <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                  {this.renderAdmin()}
                  {/* <TouchableOpacity style={styles.secondaryButtonContainer} >
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity >
                    <Text style={[styles.buttonText, styles.footer]}>Forgot your password?</Text>
                  </TouchableOpacity> */}
                </View>
              )
        }
    }
  
    render () {
        return (
            <SafeAreaView>
              <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
                {this.renderProfile()}
              </ImageBackground>
            </SafeAreaView>
        );
    }
  }

export default Profile;