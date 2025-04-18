import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ChatScreen from './ChatScreen';
import FriendListScreen from './FriendListScreen';
import StatusScreen from './StatusScreen';
import ProfileScreen from './ProfileScreen';

import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MainMenuScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: '#3B82F6',
        }}
      >
        <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarLabel: '🗨️ Chat' }} />
        <Tab.Screen name="FriendList" component={FriendListScreen} options={{ tabBarLabel: '📇 Danh bạ' }} />
        <Tab.Screen name="Status" component={StatusScreen} options={{ tabBarLabel: '💭 Trạng thái' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: '👤 Cá nhân' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
