import { analyzeEmotionFromStatus } from './EmotionAnalyzer';
import { generateAIStoryByEmotion } from './AIStoryGenerator';

// Giả sử đây là status người dùng đã đăng gần đây
const recentStatusSamples = [
  'Hôm nay hơi mệt và buồn một xíu...',
  'Chán học quá 😭',
];

export function getAutoStory() {
  const emotion = analyzeEmotionFromStatus(recentStatusSamples);
  const aiSuggestion = generateAIStoryByEmotion(emotion);

  return {
    id: 'auto-ai',
    friendName: 'Loli',
    avatar: 'https://i.imgur.com/abc123.png',
    image: aiSuggestion.image,
    caption: aiSuggestion.caption,
    timestamp: Date.now(),
  };
}
