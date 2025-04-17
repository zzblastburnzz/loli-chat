// src/services/FriendStoryService.ts

import { getAutoStory } from './AutoStoryService';

export const getTodayStories = () => {
  const autoStory = getAutoStory();

  const friendStories = [
    {
      id: 'friend1',
      friendName: 'Minh Anh',
      avatar: 'https://i.imgur.com/avatar1.png',
      image: 'https://i.imgur.com/image1.jpg',
      caption: 'Cùng nhau học bài nào!',
    },
    {
      id: 'friend2',
      friendName: 'Hoàng',
      avatar: 'https://i.imgur.com/avatar2.png',
      image: 'https://i.imgur.com/image2.jpg',
      caption: 'Trà sữa là chân ái!',
    },
    // Thêm các story khác nếu cần
  ];

  return [autoStory, ...friendStories];
};
