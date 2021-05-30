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
        this.setState( {firstName: event });
      }
    onlastNameChange = (event) => {
        this.setState({ lastName: event });
      }
    onclassYearChange = (event) => {
        this.setState({ classYear: event });
      }
    onEmailChange = (event) => {
        this.setState({ email: event });
      }
    onPasswordChange = (event) => {
        this.setState({ password: event });
      }

    signedIn = () => {
        const fields = { email: this.state.email, password: this.state.password };
        this.props.signin(fields);
    }

    signedUp = () => {
        const fields = { firstName: this.state.firstName, lastName: this.state.lastName, classYear: parseInt(this.state.classYear), email: this.state.email, password: this.state.password, house: "none", sex: "N/A", permission: "none" };
        // const fields = { email: this.state.email, password: this.state.password };
        this.props.signup(fields);
    }

    renderSignUp = () => { 
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Sign Up</Text>
                <Text style={styles.title}> First Name </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onlastNameChange(e)} />
                <Text style={styles.title}> Last Name </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onfirstNameChange(e)} />
                <Text style={styles.title}> Class Year </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onclassYearChange(e)} />
                <Text style={styles.title}> Email </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onEmailChange(e)}/>
                <Text style={styles.title}> Password </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onPasswordChange(e)} />

                <Button title="Sign Up NOW" onPress={this.signedUp} />
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
                <TextInput style={styles.input} onChangeText={e=>this.onEmailChange(e)} />
                <Text style={styles.title}> Password </Text>
                <TextInput style={styles.input} onChangeText={e=>this.onPasswordChange(e)} />
                <Button title="Sign In NOW" onPress={this.signedIn} />
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