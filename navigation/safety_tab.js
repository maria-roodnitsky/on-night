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
const SafetyTab = (props) => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          children={() => <Safety />}
          options={{title: 'Responsible Drinking',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 22,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            },
            }}
          />
      </Stack.Navigator>
  );
}

export default SafetyTab;