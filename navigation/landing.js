import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import TextareaAutosize from 'react-textarea-autosize';

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
        this.setState({ firstName: event.target.value });
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
            <View>
                <text> Sign Up</text>
                <text> First Name </text>
                <TextareaAutosize autoFocus className="name" value={this.state.firstName} onChange={this.onfirstNameChange} />
                <text> Last Name </text>
                <TextareaAutosize autoFocus className="name" value={this.state.lastName} onChange={this.onlastNameChange} />
                <text> Class Year </text>
                <TextareaAutosize autoFocus className="name" value={this.state.classYear} onChange={this.onclassYearChange} />
                <text> Email </text>
                <TextareaAutosize autoFocus className="email" value={this.state.email} onChange={this.onEmailChange} />
                <text> Password </text>
                <TextareaAutosize autoFocus className="password" value={this.state.password} onChange={this.onPasswordChange} />

                <Button title="sign up NOW" onPress={this.props.signup} />
                <Text>Already Have an account?</Text>

                <Button title="sign in"onPress={this.switch} />
            </View>
        )
    }

    renderSignIn = () => { 
        return (
            <View>
                <text> Sign In</text>
                <text> Email </text>
                <TextareaAutosize autoFocus className="email" value={this.state.email} onChange={this.onEmailChange} />
                <text> Password </text>
                <TextareaAutosize autoFocus className="password" value={this.state.password} onChange={this.onPasswordChange} />
                <Button title="sign In NOW" onPress={this.props.signup} />
                <Text>Don't Have an account?</Text>
                <Button title="sign up"onPress={this.switch} />
            </View>
        )
    }
  
    render () {
        return (
            <View>
                {this.state.signup && this.renderSignUp()}
                {!this.state.signup && this.renderSignIn()}
            </View>
        );
    }
  }

export default Landing;