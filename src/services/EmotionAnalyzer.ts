export function analyzeEmotionFromStatus(statuses: string[]): 'positive' | 'negative' | 'neutral' {
  const joined = statuses.join(' ').toLowerCase();

  const positiveWords = ['vui', 'thích', 'tuyệt', 'hạnh phúc', 'cà phê', 'đi chơi', 'nắng'];
  const negativeWords = ['buồn', 'mệt', 'áp lực', 'stress', 'chán', 'cô đơn'];

  const positives = positiveWords.filter(word => joined.includes(word)).length;
  const negatives = negativeWords.filter(word => joined.includes(word)).length;

  if (positives > negatives) return 'positive';
  if (negatives > positives) return 'negative';
  return 'neutral';
}
