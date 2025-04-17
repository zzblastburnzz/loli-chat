import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { getTodayStories } from '../services/FriendStoryService';
import StoryCard from '../components/StoryCard';

export default function StoryFeedScreen() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getTodayStories();
      setStories(data);
    };
    fetchStories();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📸 Story hôm nay của bạn ảo</Text>
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoryCard story={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  list: { paddingBottom: 40 },
});
