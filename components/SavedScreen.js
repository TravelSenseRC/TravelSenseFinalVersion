{/*
  Here, you can have the code for the Saved screen. This is just a placeholder screen.
  */}

import React from 'react';
import { View, Text, Button } from 'react-native';

function SavedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Saved Screen</Text>
      <Button title="Go to HomeScreen" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default SavedScreen;