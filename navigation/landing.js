import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


class Landing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        signup: false,
      };
    }

    switch = () => {
        this.setState({signup: !this.state.signup});
    }

    renderSignUp = () => { 
        return (
            <View>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Button title="sign up NOW" onPress={this.props.signup} />
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>Already Have an account?</Text>
                <Button title="sign in"onPress={this.switch} />
            </View>
        )
    }

    renderSignIn = () => { 
        return (
            <View>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Button title="sign In NOW" onPress={this.props.signup} />
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
                <Text>hi</Text>
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