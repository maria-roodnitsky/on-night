import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

class ForgotPw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  onEmailChange = (event) => {
    this.setState({email: event});
  }

  render() {
    return (
      <View>
        <Text>Forgot Password?</Text>
        <TextInput onChangeText={e => this.onEmailChange(e)}/>
        <Text>
          Hey, we get it! We all forget out passwords sometimes.
          Let us know how we can reach you so we can reset it for you. 
        </Text>
        <TouchableOpacity>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ForgotPw;