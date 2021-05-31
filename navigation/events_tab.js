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

import EventList from '../components/event_list';
import Test from '../components/test';
import Safety from '../components/safety';
import { withTheme } from 'react-native-elements';

const Stack = createStackNavigator();

const styles = StyleSheet.create({ 
  
});

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const EventsTab = (props) => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Events"
          children={() => <EventList token={props.token}/>}
          options={{
              title: 'Events',
              headerStyle: {
              backgroundColor: '#A9469F',
              },
              headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
        />
      </Stack.Navigator>
  );
}

export default EventsTab;