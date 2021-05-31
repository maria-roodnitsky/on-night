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

import UserList from '../components/user_list';
import { withTheme } from 'react-native-elements';

const Stack = createStackNavigator();

const styles = StyleSheet.create({ 
  
});

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const UsersTab = (props) => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          children={() => <UserList token={props.token}/>}
          options={{
              title: 'Users',
              headerStyle: {
              backgroundColor: '#A9469F',
              },
              headerTintColor: '#fff',
          }}
          />
      </Stack.Navigator>
  );
}

export default UsersTab;