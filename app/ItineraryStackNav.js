import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItineraryGenerator1 from '../components/ItineraryGenerator1';
import ItineraryGenerator2 from '../components/ItineraryGenerator2';
import ItineraryGenerator3 from '../components/ItineraryGenerator3';

const Stack = createStackNavigator();

const ItineraryStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ItineraryGenerator1">
      <Stack.Screen
        name="ItineraryGenerator1"
        component={ItineraryGenerator1}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="ItineraryGenerator2"
        component={ItineraryGenerator2}
        options={{ title: 'Itinerary Step 2' }}
      />
      <Stack.Screen
        name="ItineraryGenerator3"
        component={ItineraryGenerator3}
        options={{ title: 'Itinerary Step 3' }}
      />
    </Stack.Navigator>
  );
};

export default ItineraryStackNavigator;