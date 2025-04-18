import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StoryReaction({ onReact }: { onReact: (emoji: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const emojis = ['❤️', '😆', '😢', '👍'];

  return (
    <View style={styles.container}>
      {emojis.map((emoji) => (
        <TouchableOpacity
          key={emoji}
          onPress={() => {
            setSelected(emoji);
            onReact(emoji);
          }}
          style={[styles.emojiButton, selected === emoji && styles.selected]}
        >
          <Text style={styles.emoji}>{emoji}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginTop: 6 },
  emojiButton: {
    padding: 6, borderRadius: 6, marginRight: 8,
    backgroundColor: '#f0f0f0',
  },
  selected: {
    backgroundColor: '#FFD700',
  },
  emoji: { fontSize: 18 },
});
