import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getCommentForStory } from '../services/StoryAICommentService';

export default function StoryCard({ story }: { story: any }) {
  const handleComment = async () => {
    const aiReply = await getCommentForStory(story.friendName, story.caption);
    Alert.alert('Phản hồi từ ' + story.friendName, aiReply);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: story.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{story.friendName}</Text>
      </View>
      <Image source={{ uri: story.image }} style={styles.image} />
      <Text style={styles.caption}>{story.caption}</Text>
      <TouchableOpacity style={styles.button} onPress={handleComment}>
        <Text style={styles.buttonText}>💬 Nhắn tin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  name: { fontWeight: 'bold', fontSize: 16 },
  image: { width: '100%', height: 180, borderRadius: 8, marginBottom: 8 },
  caption: { fontSize: 14, color: '#333', marginBottom: 8 },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: { color: '#fff', fontSize: 14 },
});
