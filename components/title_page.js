import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class TitlePage extends Component {
  render() {
    return (
      <View>
        <Text>Title Page</Text>
        <TouchableOpacity>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TitlePage;