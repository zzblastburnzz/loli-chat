import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { saveReactionHistory } from '../services/StoryReactionStorage';

export default function StoryReaction({
  onReact,
  story,
}: {
  onReact: (emoji: string) => void;
  story: any;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const emojis = ['❤️', '😆', '😢', '👍'];

  return (
    <View style={styles.container}>
      {emojis.map((emoji) => (
        <TouchableOpacity
          key={emoji}
          onPress={async () => {
            setSelected(emoji);
            onReact(emoji);
            await saveReactionHistory(story, emoji);
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
    padding: 6,
    borderRadius: 6,
    marginRight: 8,
    backgroundColor: '#f0f0f0',
  },
  selected: {
    backgroundColor: '#FFD700',
  },
  emoji: { fontSize: 18 },
});
