import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Verification extends Component {
  render() {
    return (
      <View>
        <Text>Verification</Text>
        <Text>
          You should soon receive an email authorizing you to sign in to OnNight!
        </Text>
        <Text>See you soon!</Text>
      </View>
    );
  }
}

export default Verification;