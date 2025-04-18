export function getAvatarByMood(mood: 'happy' | 'sad' | 'neutral'): string {
  switch (mood) {
    case 'happy':
      return 'https://i.imgur.com/Uefiygn.png'; // avatar vui
    case 'sad':
      return 'https://i.imgur.com/RM0XkVp.jpg'; // avatar buồn
    default:
      return 'https://i.imgur.com/AnYcFxg.png'; // avatar trung tính
  }
}
