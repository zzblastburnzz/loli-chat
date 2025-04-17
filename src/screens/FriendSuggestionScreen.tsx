import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FriendCard from '../components/FriendCard';

const mockFriends = [
  { id: 'bon1', name: 'Bon', avatar: 'https://i.imgur.com/Uefiygn.png' },
  { id: 'miu2', name: 'Miu', avatar: 'https://i.imgur.com/AnYcFxg.png' },
  { id: 'ken3', name: 'Ken', avatar: 'https://i.imgur.com/3JZ7zAq.png' }
];

export default function FriendSuggestionScreen({ navigation }: any) {
  const handleSelect = (friendId: string) => {
    navigation.navigate('Chat', { friendId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn một người bạn để bắt đầu trò chuyện 💬</Text>
      <FlatList
        data={mockFriends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FriendCard friend={item} onSelect={handleSelect} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  list: { paddingBottom: 100 },
});
