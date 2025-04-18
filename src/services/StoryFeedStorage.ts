import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'STORY_FEED';

export async function saveStoryFeed(stories: any[]) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
  } catch (error) {
    console.error('Error saving stories:', error);
  }
}

export async function loadStoryFeed(): Promise<any[]> {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading stories:', error);
    return [];
  }
}
