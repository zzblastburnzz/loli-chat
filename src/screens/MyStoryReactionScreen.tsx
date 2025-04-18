import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { getReactionHistory } from '../services/StoryReactionStorage';

export default function MyStoryReactionScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getReactionHistory();
      setHistory(data);
    };
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Story bạn đã react</Text>
      <FlatList
        data={history}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.friendName} {item.emoji}</Text>
            <Text style={styles.caption}>“{item.caption}”</Text>
            <Text style={styles.time}>
              {new Date(item.reactedAt).toLocaleString()}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  list: {},
  item: {
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
  },
  name: { fontWeight: 'bold' },
  caption: { fontStyle: 'italic', color: '#444' },
  time: { fontSize: 12, color: '#666', marginTop: 4 },
});
