import color from 'color';
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Text, View, Button, TextInput, SafeAreaView, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import signin from '../App';
import signup from '../App';
import PasswordInputText from 'react-native-hide-show-password-input';
import { Icon } from 'react-native-elements';
import TextBox from 'react-native-password-eye'; 
import axios from 'axios';

const ROOT_URL = 'https://on-night-api.herokuapp.com/api';

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
  house: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginBottom: 20,
    lineHeight: 30,
  },
  title: {
    fontSize: 17,
    marginLeft: 15,
    marginTop: 20,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginBottom: 20,
    lineHeight: 30,
  },
  contentsTitle: {
    fontSize: 15,
    marginTop: 20,
    fontFamily: 'Comfortaa-Regular',
    color: 'black',
    marginBottom: 20,
    lineHeight: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
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
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '90%',
    height: 100,
    padding: 10,
    borderRadius: 10, 
    margin: 10,
    opacity: .8,
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
    color: 'black',
    fontFamily: 'Open-Sans', 
    textTransform: "uppercase",
    fontSize: 20,
    marginTop: 25,
  },
  contents: {
      width: '90%',
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius: 10,
      marginLeft: '5%',
  },
  footer: {
    marginTop: 200,
    alignSelf: "center",
  }
});

class AdminPortal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
      };
    }

    componentDidMount() {
        this.setUser();
    }

    setUser = () => {
        axios.get(`${ROOT_URL}/users`, {headers: {'authorization': this.props.token}}).then((response) => {
            for (const user of response.data) {
                if (user.email == this.props.email) {
                    this.setState({user});
                }
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    renderPortalContents = () => {
        if (this.state.user.house != "none") {
            return (
                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Members</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.contents}>
                    <Text style={styles.contentsTitle}>To edit your organization, please have your current admin add you as a member</Text>
                </View>
            );
        }
    }


    renderPortal = () => { 
        if (this.state.user == null) {
            return (
                <View style={styles.container}>
                    <Text style={styles.heading}> Loading</Text>
                </View>
            );
        } else {
            return (
                <View>
                    <Text style={styles.title}>Welcome to the admin portal, the place for those in charge of a greek house on OnNight! Here, you can edit membership and events of our organization.</Text>
                    <Text style={styles.house}> Your Organization: {this.state.user.house}</Text>
                    {this.renderPortalContents()}
                </View>
            );
        }
    }
  
    render () {
        return (
            <SafeAreaView>
              <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
                {this.renderPortal()}
              </ImageBackground>
            </SafeAreaView>
        );
    }
  }

export default AdminPortal;