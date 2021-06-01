import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

class ForgotPw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPw: ''
    };
  }

  onPasswordChange = (event) => {
    this.setState({password: event});
  }

  onConfirmChange = (event) => {
    this.setState({confirmPw: event});
  }

  render() {
    return (
      <View>
        <Text>New Password</Text>
        <TextInput onChangeText={e => this.onPasswordChange(e)}/>
        <TextInput onChangeText={e => this.onConfirmChange(e)}/>
        <Text>
          Don't forget it this time ;) 
        </Text>
        <TouchableOpacity>
          <Text>Save and Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ForgotPw;