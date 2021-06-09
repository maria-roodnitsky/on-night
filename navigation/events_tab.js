/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Schedule from '../components/calendar.tsx';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#1c1d31',
  },
  backgroundImg: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
});

const EventsTab = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Events"
        children={() => (
          <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImg}>
            <Schedule token={props.token} styles={styles.heading} />
          </ImageBackground>
        )}
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
    </Stack.Navigator>
  );
};

export default EventsTab;
