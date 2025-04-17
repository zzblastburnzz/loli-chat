import React, { useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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
	<TouchableOpacity onPress={() => navigation.navigate('Status')} style={[styles.button, { backgroundColor: '#10B981', marginTop: 10 }]}>
 	 <Text style={styles.buttonText}>🧠 Test StatusScreen</Text>
	</TouchableOpacity>
		<Button
	        title="Xem Story của bạn ảo"
        onPress={() => navigation.navigate('StoryFeed')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 10,
    padding: 12, width: '100%', marginBottom: 20,
  },
  button: {
    backgroundColor: '#3B82F6', paddingVertical: 12,
    paddingHorizontal: 32, borderRadius: 10,
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
