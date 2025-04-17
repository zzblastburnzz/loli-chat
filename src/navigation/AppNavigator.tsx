import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import FriendSuggestionScreen from '../screens/FriendSuggestionScreen';
import ChatScreen from '../screens/ChatScreen';
import StatusScreen from '../screens/StatusScreen';

export type RootStackParamList = {
  Welcome: undefined;
  FriendSuggestion: undefined;
  Chat: { friendId: string };
  Status: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="FriendSuggestion" component={FriendSuggestionScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Status" component={StatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
