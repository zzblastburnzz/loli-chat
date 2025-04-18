import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, KeyboardAvoidingView, Platform
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { getScheduledMessage } from '../services/AutoMessageScheduler';
import { checkEmotionTrigger } from '../services/AICompanionLogic';
import { detectMoodFromText } from '../services/MoodDetector';
import { getAvatarByMood } from '../services/AvatarMoodSelector';

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;

export default function ChatScreen() {
  const route = useRoute<ChatScreenRouteProp>();
  const { friendId } = route.params;
  const [messages, setMessages] = useState([
    { from: 'bot', text: `Xin chào! Mình là ${friendId}, rất vui được làm bạn với bạn 💬` }
  ]);
  const [input, setInput] = useState('');

  const addMessage = (msg: { from: 'bot' | 'user', text: string }) => {
    setMessages((prev) => [...prev, msg]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    addMessage(userMsg);

	const mood = detectMoodFromText(story.caption || status);
	const avatar = getAvatarByMood(mood);

    // Fake bot reply
    setTimeout(() => {
      addMessage({ from: 'bot', text: `Mình thấy bạn nói: "${input}". Mình luôn sẵn sàng lắng nghe nè! 😊` });

      // Nếu có nội dung buồn, phản hồi thêm
      const trigger = checkEmotionTrigger([input]);
      if (trigger) {
        setTimeout(() => {
          addMessage({ from: 'bot', text: trigger });
        }, 1000);
      }
    }, 800);

    setInput('');
  };

  useEffect(() => {
    const auto = getScheduledMessage();
    if (auto) {
      addMessage({ from: 'bot', text: auto.message });
    }
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <FlatList
        data={messages}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={[styles.message, item.from === 'user' ? styles.user : styles.bot]}>
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
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
  list: { padding: 12 },
  message: {
    padding: 10,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: '80%',
  },
  user: { alignSelf: 'flex-end', backgroundColor: '#DCF8C6' },
  bot: { alignSelf: 'flex-start', backgroundColor: '#E5E5EA' },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#3B82F6',
    padding: 10,
    borderRadius: 20,
  },
});
