// src/screens/StoryFeedScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getTodayStories } from '../services/FriendStoryService';
import StoryCard from '../components/StoryCard';

const StoryFeedScreen = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchedStories = getTodayStories();
    setStories(fetchedStories);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoryCard story={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
});

export default StoryFeedScreen;
