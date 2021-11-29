import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import homeScreen from '../modules/homeScreen/homeScreen';
import search from '../modules/search/search';

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator
      screenOptions={({gestureEnabled: false}, {headerShown: false})}>
      <Tab.Screen name="Home" component={homeScreen} />
      <Tab.Screen name="Search" component={search} />
    </Tab.Navigator>
  );
}
