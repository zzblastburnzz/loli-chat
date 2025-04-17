// src/services/AutoStoryService.ts

export const getAutoStory = () => {
  const stories = [
    {
      id: 'auto1',
      friendName: 'Loli',
      avatar: 'https://i.imgur.com/abc123.png',
      image: 'https://i.imgur.com/xyz456.jpg',
      caption: 'Hôm nay trời đẹp quá, cùng nhau đi dạo nhé!',
    },
    {
      id: 'auto2',
      friendName: 'Loli',
      avatar: 'https://i.imgur.com/abc123.png',
      image: 'https://i.imgur.com/def789.jpg',
      caption: 'Đã đến giờ uống trà sữa rồi nè!',
    },
    // Thêm các story khác nếu cần
  ];

  const today = new Date().getDate();
  return stories[today % stories.length];
};
