import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Safety from '../components/safety';

const Stack = createStackNavigator();

const SafetyTab = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        // eslint-disable-next-line react/no-children-prop
        children={() => <Safety />}
        options={{
          title: 'Responsible Drinking',
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
};

export default SafetyTab;
