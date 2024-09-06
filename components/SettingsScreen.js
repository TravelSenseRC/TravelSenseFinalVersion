{/*
  Here, you can have the code for the Settings Screen. This is just a placeholder screen
  */}

import React from 'react';
import { View, Text, Button } from 'react-native';

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title="Go to HomeScreen" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default SettingsScreen;