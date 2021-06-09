/* eslint-disable no-alert */
/* eslint-disable radix */
import React, { Component } from 'react';
import {
  Text, Platform, View, TextInput, SafeAreaView, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView,
} from 'react-native';
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
    backgroundColor: '#ffffff80',
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
  inputIcon: {
    flex: 1,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    margin: 25,
    fontFamily: 'Comfortaa-Regular',
    color: 'white',
    marginTop: Dimensions.get('window').height * 0.1,
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
    fontFamily: 'Comfortaa-Regular',
  },
  backgroundImg: {
    width: '100%',
    height: Dimensions.get('window').height,
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
  contents: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    margin: 10,
    marginLeft: '5%',
  },
  footer: {
    marginTop: 200,
    alignSelf: 'center',
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
});

class OrgEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      month: '',
      year: '',
      day: '',
      time: '',
      description: '',
    };
  }

    onNameChange = (event) => {
      this.setState({ name: event });
    }

    onMonthChange = (event) => {
      this.setState({ month: event });
    }

    onDayChange = (event) => {
      this.setState({ day: event });
    }

    onYearChange = (event) => {
      this.setState({ year: event });
    }

    onTimeChange = (event) => {
      this.setState({ time: event });
    }

    onDescriptionChange = (event) => {
      this.setState({ description: event });
    }

    addEvent = () => {
      const fields = {
        title: this.state.name, time: this.state.time, day: parseInt(this.state.day), month: parseInt(this.state.month), year: parseInt(this.state.year), description: this.state.description, public: true, location: this.props.user.house,
      };
      axios.post(`${ROOT_URL}/events`, fields, { headers: { authorization: this.props.token } }).then((response) => {
        console.log('Event Added!');
        this.props.reRender();
      }).catch((error) => {
        alert('Event not added');
      });
    }

    renderNewEvent = () => {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView style={styles.container}>
            <Text style={styles.heading2}>New Event</Text>
            <TextInput style={styles.input} placeholder="NAME OF EVENT" onChangeText={(e) => this.onNameChange(e)} />
            <View style={styles.inputView}>
              <TextBox
                containerStyles={[styles.smallInput]}
                placeholder="MONTH"
                onChangeText={(e) => this.onMonthChange(e)}
              />
              <TextBox
                containerStyles={[styles.smallInput]}
                placeholder="DAY"
                onChangeText={(e) => this.onDayChange(e)}
              />
              <TextBox
                containerStyles={[styles.smallInput]}
                placeholder="YEAR"
                onChangeText={(e) => this.onYearChange(e)}
              />
            </View>
            <Text style={styles.note}>Note: enter integer values for month, day, and year</Text>
            <TextBox
              containerStyles={[styles.input]}
              placeholder="TIME"
              onChangeText={(e) => this.onTimeChange(e)}
            />
            <TextBox
              containerStyles={[styles.input]}
              placeholder="DESCRIPTION"
              onChangeText={(e) => this.onDescriptionChange(e)}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={this.addEvent}>
              <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 100 }} />
          </ScrollView>
        </KeyboardAvoidingView>
      );
    }

    render() {
      return (
        <SafeAreaView>
          <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
            {this.renderNewEvent()}
          </ImageBackground>
        </SafeAreaView>
      );
    }
}

export default OrgEvents;
