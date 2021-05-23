import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableHighlight,
  Button,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Safety from '../components/safety';
import { withTheme } from 'react-native-elements';

const Stack = createStackNavigator();

const styles = StyleSheet.create({ 
  
});

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const SafetyTab = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Safety}
          options={{
              title: 'Alcohol Safety and Prevention',
              headerStyle: {
              backgroundColor: '#A9469F',
              },
              headerTintColor: '#fff',
          }}
          />
      </Stack.Navigator>
  );
}

export default SafetyTab;