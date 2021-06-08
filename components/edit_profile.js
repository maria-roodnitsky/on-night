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
      paddingTop: 20,
  },
  input: {
    height: 45,
    margin: 20,
    marginBottom: 10,
    marginRight: 3,
    backgroundColor: '#ffffff80',
    borderRadius: 8, 
    textAlign: 'left',
    paddingLeft: 16,
    fontFamily: 'Open-Sans',
    width: '70%',
  },
  static: {
    height: 45,
    margin: 20,
    marginBottom: 10,
    backgroundColor: 'rgba(150,150,150,0.5)',
    borderRadius: 8, 
    textAlign: 'left',
    paddingLeft: 16,
    fontFamily: 'Open-Sans',
  },
  inputView: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 20,
      justifyContent: 'space-between',
      width: '90%',
  },
  smallInput: {
    height: 45,
    marginTop: 20,
    width: '29%',
    backgroundColor: '#ffffff80',
    borderRadius: 8, 
    textAlign: 'left',
    paddingLeft: 10,
    fontFamily: 'Open-Sans',
    marginBottom: 5,
  },
  note: {
      textAlign: 'center',
      marginBottom: 10,
      color: 'white',
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
  heading2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
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
  smallButtonContainer: {
    alignSelf: 'center',
    backgroundColor: '#A9469F',
    width: '18%',
    height: 45,
    margin: 20,
    marginLeft: 3,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10, 
    opacity: .8,
    borderWidth: 2,
    borderColor:'#A9469F',
  },
  smallButtonText: {
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
  eventsFor: {
    fontSize: 17,
    margin: 10,
    marginTop: 20,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    lineHeight: 30,
    textAlign: 'center',
  },
  eventTitle: {
    fontSize: 20,
    fontFamily: 'Comfortaa-Regular',
    color: 'black',
    margin: 10,
    textAlignVertical: 'center',
  },
  eventDescription: {
    fontSize: 15,
    fontFamily: 'Comfortaa-Regular',
    color: 'black',
    textAlignVertical: 'center',
    marginLeft: 10,
    margin: 5,
  },
  staticfield: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Regular',
    color: 'black',
    textAlignVertical: 'center',
    marginTop: 14,
  }
});

class EditProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        year: 0,
        password: '',
        editingName: false,
        editingYear: false,
        editingGender: false,
        house: 'Unaffiliated',
        gender: 'Indicated Gender: Unspecified'
      };
    }

    componentDidMount() {
        this.setState({name: this.props.user.name, year: this.props.user.classYear, password: this.props.user.password});
        if (this.props.user.house != null) {
            this.setState({house: this.props.user.house});
        }
        if (this.props.user.sex != 'N/A') {
            this.setState({ gender: this.props.user.sex });
        }
    }

    updateProfile = () => {
        let fields = {};
        if (this.state.name != '' && this.state.name != this.props.user.name) {
            fields.name = this.state.name;
        }
        if (this.state.year != '' && this.state.year != this.props.user.classYear) {
            fields.classYear = this.state.year;
        }
        if (this.state.gender != 'Indicated Gender: Unspecified' && this.state.gender != this.props.user.sex) {
            fields.sex = this.state.gender;
        }
        axios.put(`${ROOT_URL}/users/${this.props.user._id}`, fields).then((response) => {
            console.log(response.data);
            // this.props.navigation.navigate("Profile");
            this.props.reRender();
        }).catch((error) => {
            console.log("Editing Profile Failed");
        });
        console.log(fields);
    }

    toggleNameEdit = () => {
        this.setState({editingName: !this.state.editingName})
    }

    toggleYearEdit = () => {
        this.setState({editingYear: !this.state.editingYear})
    }

    toggleGenderEdit = () => {
        this.setState({editingGender: !this.state.editingGender})
    }

    onNameChange = (event) => {
        this.setState({ name: event });
    }

    onGenderChange = (event) => {
        this.setState({ gender: event });
    }

    onYearChange = (event) => {
        this.setState({ year: event });
    }

    renderEdit = () => { 
        return (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
            >
              <ScrollView style={styles.container}>
                <Text style={styles.heading2}>Edit Profile</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    {!this.state.editingName && <View style={styles.input}>
                        <Text style={styles.staticfield}>{this.state.name}</Text>
                    </View>}
                    {this.state.editingName && <TextBox
                        containerStyles={[styles.input]}
                        placeholder="NEW NAME"
                        onChangeText={e=>this.onNameChange(e)}
                    />}
                    {!this.state.editingName && <TouchableOpacity style={styles.smallButtonContainer} onPress={() => {this.toggleNameEdit()}}>
                        <Text style={styles.smallButtonText}>edit</Text>
                    </TouchableOpacity>}
                    {this.state.editingName && <TouchableOpacity style={styles.smallButtonContainer} onPress={() => {this.toggleNameEdit()}}>
                        <Text style={styles.smallButtonText}>done</Text>
                    </TouchableOpacity>}
                </View>
                <View style={styles.static}>
                    <Text style={styles.staticfield}>{this.props.user.email}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    {!this.state.editingYear && <View style={styles.input}>
                        <Text style={styles.staticfield}>{this.state.year}</Text>
                    </View>}
                    {this.state.editingYear && <TextBox
                        containerStyles={[styles.input]}
                        placeholder="NEW CLASS YEAR"
                        onChangeText={e=>this.onYearChange(e)}
                    />}
                    {!this.state.editingYear && <TouchableOpacity style={styles.smallButtonContainer} onPress={() => {this.toggleYearEdit()}}>
                        <Text style={styles.smallButtonText}>edit</Text>
                    </TouchableOpacity>}
                    {this.state.editingYear && <TouchableOpacity style={styles.smallButtonContainer} onPress={() => {this.toggleYearEdit()}}>
                        <Text style={styles.smallButtonText}>done</Text>
                    </TouchableOpacity>}
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    {!this.state.editingGender && <View style={styles.input}>
                        <Text style={styles.staticfield}>{this.state.gender}</Text>
                    </View>}
                    {this.state.editingGender && <TextBox
                        containerStyles={[styles.input]}
                        placeholder="GENDER"
                        onChangeText={e=>this.onGenderChange(e)}
                    />}
                    {!this.state.editingGender && <TouchableOpacity style={styles.smallButtonContainer} onPress={() => {this.toggleGenderEdit()}}>
                        <Text style={styles.smallButtonText}>edit</Text>
                    </TouchableOpacity>}
                    {this.state.editingGender && <TouchableOpacity style={styles.smallButtonContainer} onPress={() => {this.toggleGenderEdit()}}>
                        <Text style={styles.smallButtonText}>done</Text>
                    </TouchableOpacity>}
                </View>
                <View style={styles.static}>
                    <Text style={styles.staticfield}>{this.state.house}</Text>
                </View>
                {/* <TextBox
                  containerStyles={[styles.input]}
                  placeholder="NEW CLASS YEAR (ex. 2022)"
                  onChangeText={e=>this.onTimeChange(e)}
                />
                <TextBox
                  containerStyles={[styles.input]}
                  placeholder="OLD PASSWORD"
                  onChangeText={e=>this.onDescriptionChange(e)}
                />
                <TextBox
                  containerStyles={[styles.input]}
                  placeholder="NEW PASSWORD"
                  onChangeText={e=>this.onDescriptionChange(e)}
                />
                <TextBox
                  containerStyles={[styles.input]}
                  placeholder="CONFIRM NEW PASSWORD"
                  onChangeText={e=>this.onDescriptionChange(e)}
                /> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.updateProfile()}}>
                  <Text style={styles.buttonText}>Update Profile</Text>
                </TouchableOpacity>
                <View style={{marginTop: 100}}/>
              </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    renderContent = () => {
        if (this.state.name == '') {
            return <Text style={styles.heading}>Loading</Text>
        } else {
            return this.renderEdit();
        }
    }
  
    render () {
        return (
            <SafeAreaView>
              <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
                {this.renderContent()}
              </ImageBackground>
            </SafeAreaView>
        );
    }
  }

export default EditProfile;