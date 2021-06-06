import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Button,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import EventList from '../components/event_list';
import Test from '../components/test';
import Safety from '../components/safety';
import { withTheme } from 'react-native-elements';
import Schedule from '../components/calendar.tsx';

const Stack = createStackNavigator();

const styles = StyleSheet.create({ 
  heading: {
    backgroundColor: '#1c1d31',
  },
  backgroundImg: {
    width: '100%',
    height: Dimensions.get("window").height,
  }
});

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const EventsTab = (props) => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Events"
          children={() =>
            <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
            <Schedule token={props.token}  styles={styles.heading}/>
            </ImageBackground>
          }
          options={{
            title: 'Events',
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
        />
        <Stack.Screen
          name="Test"
          component={Test}
        />
      </Stack.Navigator>
  );
}

export default EventsTab;