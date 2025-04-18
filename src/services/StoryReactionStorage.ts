import AsyncStorage from '@react-native-async-storage/async-storage';

const REACT_HISTORY_KEY = 'STORY_REACT_HISTORY';

export async function saveReactionHistory(story: any, emoji: string) {
  try {
    const stored = await AsyncStorage.getItem(REACT_HISTORY_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    const newEntry = { ...story, emoji, reactedAt: Date.now() };
    parsed.unshift(newEntry);
    await AsyncStorage.setItem(REACT_HISTORY_KEY, JSON.stringify(parsed.slice(0, 30))); // keep last 30
  } catch (e) {
    console.error('Failed to save reaction history:', e);
  }
}

export async function getReactionHistory(): Promise<any[]> {
  try {
    const stored = await AsyncStorage.getItem(REACT_HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Failed to load reaction history:', e);
    return [];
  }
}
