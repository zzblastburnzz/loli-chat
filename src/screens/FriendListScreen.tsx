import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FriendListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📇 Danh sách bạn bè (đang phát triển)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});
