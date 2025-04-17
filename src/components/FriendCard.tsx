import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Friend = {
  id: string;
  name: string;
  avatar?: string;
};

export default function FriendCard({
  friend,
  onSelect,
}: {
  friend: Friend;
  onSelect: (id: string) => void;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onSelect(friend.id)}>
      <Image
        source={{
          uri: friend.avatar || 'https://i.imgur.com/Uefiygn.png',
        }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{friend.name}</Text>
        <Text style={styles.desc}>Người bạn ảo luôn sẵn sàng tâm sự 💬</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    color: '#6b7280',
  },
});
