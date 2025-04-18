export function checkEmotionTrigger(statuses: string[]): string | null {
  const text = statuses.join(' ').toLowerCase();
  if (text.includes('mệt') || text.includes('buồn') || text.includes('chán')) {
    return 'Hôm qua mình thấy bạn hơi buồn... hôm nay ổn hơn chưa? 🫶';
  }
  return null;
}
