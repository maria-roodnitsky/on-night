import React, { Component } from 'react';
import { Text, View, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
      height: 45,
      margin: 20,
      borderWidth: 3,
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

    renderSignUp = () => { 
        return (
            <SafeAreaView>
                <Text> Sign Up</Text>
                <Text> First Name </Text>
                <TextInput style={styles.input} value={this.state.firstName} onChangeText={this.onfirstNameChange} />
                <Text> Last Name </Text>
                <TextInput style={styles.input} value={this.state.lastName} onChangeText={this.onlastNameChange} />
                <Text> Class Year </Text>
                <TextInput style={styles.input} value={this.state.classYear} onChangeText={this.onclassYearChange} />
                <Text> Email </Text>
                <TextInput style={styles.input} value={this.state.email} onChangeText={this.onEmailChange}/>
                <Text> Password </Text>
                <TextInput style={styles.input} value={this.state.password} onChangeText={this.onPasswordChange} />

                <Button title="sign up NOW" onPress={this.props.signup} />
                <Text>Already Have an account?</Text>

                <Button title="sign in"onPress={this.switch} />
            </SafeAreaView>
        )
    }

    renderSignIn = () => { 
        return (
            <SafeAreaView>
                <Text> Sign In</Text>
                <Text> Email </Text>
                <TextInput style={styles.input} value={this.state.email} onChangeText={this.onEmailChange} />
                <Text> Password </Text>
                <TextInput style={styles.input} value={this.state.password} onChangeText={this.onPasswordChange} />
                <Button title="sign In NOW" onPress={this.props.signup} />
                <Text>Don't Have an account?</Text>
                <Button title="sign up"onPress={this.switch} />

            </SafeAreaView>
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