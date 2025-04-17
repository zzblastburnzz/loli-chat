import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { getAIComment } from '../services/AIStatusResponseService';

type StatusItem = {
  id: number;
  content: string;
  aiComment: string;
};

export default function StatusScreen() {
  const [statusText, setStatusText] = useState('');
  const [feed, setFeed] = useState<StatusItem[]>([]);

  const handlePost = async () => {
    if (!statusText.trim()) return;

    const aiComment = await getAIComment(statusText);
    const newStatus: StatusItem = {
      id: Date.now(),
      content: statusText,
      aiComment,
    };

    setFeed([newStatus, ...feed]);
    setStatusText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Đăng trạng thái của bạn</Text>
      <TextInput
        placeholder="Hôm nay bạn cảm thấy thế nào?"
        value={statusText}
        onChangeText={setStatusText}
        style={styles.input}
        multiline
      />
      <TouchableOpacity onPress={handlePost} style={styles.button}>
        <Text style={styles.buttonText}>Đăng</Text>
      </TouchableOpacity>

      <FlatList
        data={feed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.feedItem}>
            <Text style={styles.statusText}>Bạn: {item.content}</Text>
            <Text style={styles.aiText}>🤖 Loli: {item.aiComment}</Text>
          </View>
        )}
        style={styles.feed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 12, minHeight: 60, textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#3B82F6', padding: 12,
    borderRadius: 8, marginTop: 10, alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
  feed: { marginTop: 20 },
  feedItem: {
    backgroundColor: '#f9f9f9', padding: 12,
    borderRadius: 8, marginBottom: 10,
  },
  statusText: { fontWeight: 'bold', marginBottom: 4 },
  aiText: { color: '#555' },
});
