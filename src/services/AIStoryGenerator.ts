export function generateAIStoryByEmotion(emotion: 'positive' | 'negative' | 'neutral') {
  if (emotion === 'positive') {
    return {
      image: 'https://i.imgur.com/OtG6eF5.jpg',
      caption: 'Hôm nay trời thật đẹp ☀️ Cùng nhau ra ngoài thư giãn nhé!',
    };
  }

  if (emotion === 'negative') {
    return {
      image: 'https://i.imgur.com/RM0XkVp.jpg',
      caption: 'Bạn đang mệt mỏi sao? Thư giãn một chút cùng mình nhé 💙',
    };
  }

  return {
    image: 'https://i.imgur.com/sJ8ZLlx.jpg',
    caption: 'Ngày mới bắt đầu rồi ☁️ Hãy làm điều gì đó nhẹ nhàng thôi!',
  };
}
