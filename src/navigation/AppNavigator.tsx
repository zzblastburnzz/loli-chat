import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import FriendSuggestionScreen from '../screens/FriendSuggestionScreen';
import ChatScreen from '../screens/ChatScreen';
import StatusScreen from '../screens/StatusScreen';
import StoryFeedScreen from '../screens/StoryFeedScreen'; // Chỉ import MỘT LẦN

export type RootStackParamList = {
  Welcome: undefined;
  FriendSuggestion: undefined;
  Chat: { friendId: string };
  Status
