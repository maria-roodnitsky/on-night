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
import Profile from '../components/profile';
import AdminPortal from '../components/admin_portal';
import { withTheme } from 'react-native-elements';

const Stack = createStackNavigator();

const styles = StyleSheet.create({ 
  
});

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const ProfileTab = (props) => {
  const token = props.token;
  const email = props.email;
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 24,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            },
          }}
        >
          {props => <Profile {...props} token={token} email={email}/>}
        </Stack.Screen>
        <Stack.Screen
          name="Portal"
          options={{
            title: 'Admin Portal',
            headerStyle: {
              backgroundColor: '#1c1d31',
              opacity: 1,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: 24,
              textAlign: 'left',
              fontFamily: 'Comfortaa-Regular',
              color: 'white',
            },
          }}
        >
          {props => <AdminPortal {...props} token={token} email={email}/>}
        </Stack.Screen>
      </Stack.Navigator>
  );
}

export default ProfileTab;