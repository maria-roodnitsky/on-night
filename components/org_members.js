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
  contents: {
      width: '90%',
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius: 10,
      margin: 10,
      marginLeft: '5%',
  },
  footer: {
    marginTop: 200,
    alignSelf: "center",
  },
  membersFor: {
    fontSize: 17,
    margin: 10,
    marginTop: 20,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    lineHeight: 30,
    textAlign: 'center',
  },
  memberName: {
    fontSize: 20,
    fontFamily: 'Comfortaa-Regular',
    color: 'black',
    margin: 10,
    textAlignVertical: 'center',
  },
  memberDescription: {
    fontSize: 15,
    fontFamily: 'Comfortaa-Regular',
    color: 'black',
    textAlignVertical: 'center',
    marginLeft: 10,
    margin: 5,
  }
});

class OrgMembers extends Component {
    constructor(props) {
      super(props);
      this.state = {
        members: null,
      };
    }

    componentDidMount() {
        this.setMembers();
    }

    setMembers = () => {
        const members = []
        for (const user of this.props.users) {
            if (user.house == this.props.user.house) {
                members.push(user);
            }
        }
        this.setState({members});
    }

    renderMembers = () => { 
        if (this.state.members == null) {
            return (
                <View style={styles.container}>
                    <Text style={styles.heading}> Loading</Text>
                </View>
            );
        } else {
            return (
                <View>
                    <Text style={styles.membersFor}>Members of: {this.props.user.house}</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigation.navigate("NewMember")}}>
                        <Text style={styles.buttonText} >Add New Member</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        {this.state.members.map((member) => {
                            return (
                                <View key={member.name} style={styles.contents}>
                                    <Text style={styles.memberName}>{member.name}</Text>
                                    <Text style={styles.memberDescription}>{member.email}</Text>
                                    <Text style={styles.memberDescription}>Permission: {member.permission}</Text>
                                </View>
                            );
                        })}
                        <View style={{marginTop: 100}}/>
                    </ScrollView>
                </View>
            );
        }
    }
  
    render () {
        return (
            <SafeAreaView>
              <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
                {this.renderMembers()}
              </ImageBackground>
            </SafeAreaView>
        );
    }
  }

export default OrgMembers;