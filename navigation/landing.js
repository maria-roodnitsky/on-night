import React, { Component } from 'react';
import { Text, View, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import signin from '../App';
import signup from '../App';

const styles = StyleSheet.create({
    container: {
      },
    input: {
      height: 45,
      margin: 20,
      borderWidth: 3,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 25,
      },
      title: {
        fontSize: 16,
        marginLeft: 15,
      },
      question: {
        fontSize: 16,
        margin: 25,
        color: 'red',
      },
  });

class Landing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        signup: false,
        firstName: '',
        lastName: '',
        classYear: '',
        email: '',
        password: '',
      };
    }

    switch = () => {
        this.setState({signup: !this.state.signup});
    }

    onfirstNameChange = (event) => {
        this.setState( {firstName: event.target.value} );
      }
    onlastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
      }
    onclassYearChange = (event) => {
        this.setState({ classYear: event.target.value });
      }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
      }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
      }

    signedIn = () => {
        this.props.signin({ email: this.state.email, password: this.state.password });
    }

    signedUp = () => {
        this.props.signup({ firstName: this.state.firstName, lastName: this.state.lastName, classYear: this.state.classYear, email: this.state.email, password: this.state.password });
    }

    renderSignUp = () => { 
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Sign Up</Text>
                <Text style={styles.title}> First Name </Text>
                <TextInput style={styles.input} value={this.state.firstName} onChange={this.onfirstNameChange} />
                <Text style={styles.title}> Last Name </Text>
                <TextInput style={styles.input} value={this.state.lastName} onChange={this.onlastNameChange} />
                <Text style={styles.title}> Class Year </Text>
                <TextInput style={styles.input} value={this.state.classYear} onChange={this.onclassYearChange} />
                <Text style={styles.title}> Email </Text>
                <TextInput style={styles.input} value={this.state.email} onChange={this.onEmailChange}/>
                <Text style={styles.title}> Password </Text>
                <TextInput style={styles.input} value={this.state.password} onChange={this.onPasswordChange} />

                <Button title="Sign Up NOW" onPress={this.props.signup} />
                <Text style={styles.question}>Already Have an account?</Text>

                <Button title="Sign In"onPress={this.switch} />
            </View>
        )
    }

    
    renderSignIn = () => { 
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Sign In</Text>
                <Text style={styles.title}> Email </Text>
                <TextInput style={styles.input} value={this.state.email} onChange={this.onEmailChange} />
                <Text style={styles.title}> Password </Text>
                <TextInput style={styles.input} value={this.state.password} onChange={this.onPasswordChange} />
                <Button title="Sign In NOW" onPress={this.props.signup} />
                <Text style={styles.question}>Don't Have an account?</Text>
                <Button title="Sign Up"onPress={this.switch} />

            </View>
        )
    }
  
    render () {
        return (
            <SafeAreaView>
                {this.state.signup && this.renderSignUp()}
                {!this.state.signup && this.renderSignIn()}
            </SafeAreaView>
        );
    }
  }

export default Landing;