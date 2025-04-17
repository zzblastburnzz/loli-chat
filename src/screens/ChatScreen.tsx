import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, KeyboardAvoidingView, Platform
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

export default function ChatScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Chat'>>();
  const { friendId } = route.params;

  const [messages, setMessages] = useState([
    { from: 'bot', text: `Xin chào! Mình là ${friendId}, rất vui khi được kết bạn với bạn! 💬` }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage, { from: 'bot', text: 'Mình đã nhận được nè!' }]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.message, item.from === 'user' ? styles.user : styles.bot]}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nhắn gì đó..."
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={{ color: '#fff' }}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  messageList: { padding: 12 },
  message: {
    padding: 10, borderRadius: 12,
    marginVertical: 4, maxWidth: '80%',
  },
  user: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  bot: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
  },
  text: { fontSize: 16 },
  inputContainer: {
    flexDirection: 'row', alignItems: 'center',
    borderTopWidth: 1, borderColor: '#ccc', padding: 8,
  },
  input: {
    flex: 1, backgroundColor: '#f0f0f0',
    padding: 10, borderRadius: 20, marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#3B82F6', padding: 10, borderRadius: 20,
  },
});
