export function detectMoodFromText(text: string): 'happy' | 'sad' | 'neutral' {
  const lower = text.toLowerCase();
  if (lower.includes('buồn') || lower.includes('mệt') || lower.includes('chán') || lower.includes('áp lực')) {
    return 'sad';
  }
  if (lower.includes('vui') || lower.includes('yêu đời') || lower.includes('thích') || lower.includes('hạnh phúc')) {
    return 'happy';
  }
  return 'neutral';
}
