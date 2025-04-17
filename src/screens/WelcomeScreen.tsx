import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const [name, setName] = useState('');

  const handleContinue = () => {
    if (name.trim() !== '') {
      navigation.navigate('FriendSuggestion');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng bạn đến với Loli 👋</Text>
      <Text style={styles.subtitle}>Hãy cho mình biết tên của bạn nhé!</Text>

      <TextInput
        placeholder="Nhập tên của bạn"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleContinue} style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Status')}
        style={[styles.button, { backgroundColor:
