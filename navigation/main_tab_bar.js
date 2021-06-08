import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import EventsTab from './events_tab';
import ProfileTab from './profile_tab';
import SafetyTab from './safety_tab';
import CustomIcon from '../components/customicon'

const AboutTab = (props) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
};

const Tab = createBottomTabNavigator();

const MainTabBar = (props) => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Events"
          tabBarOptions={{ 
              style: {backgroundColor: '#1c1d31'},
              showLabel: false
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

                  // Customize the icon we display based on the tab route
              if (route.name === 'Alcohol Safety') {
                iconName = 'pine';
              } 
                  // Adding the search icon
                  else if (route.name === 'Events') {
                iconName = 'calendar';
              } else if (route.name === 'Profile') {
                iconName = 'profile';
              } 
              
          
                  // Return the respective icon
              // return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
              return <CustomIcon name={iconName} size={26} color={focused ? '#58AADA' : 'white'}/>

            },
          })}
        >
          {/* A way to pass props like information to react native components found at https://stackoverflow.com/questions/60439210/how-to-pass-props-to-screen-component-with-a-tab-navigator */}
          <Tab.Screen name="Events" children={() => <EventsTab token={props.token}/>} />
          <Tab.Screen name="Profile" children={() => <ProfileTab token={props.token} email={props.email}/>} />
          <Tab.Screen name="Alcohol Safety" children={() => <SafetyTab token={props.token}/>} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

export default MainTabBar;