export async function getAIComment(statusText: string): Promise<string> {
  // Fake AI response (có thể tích hợp OpenAI sau)
  const lower = statusText.toLowerCase();
  if (lower.includes('buồn') || lower.includes('mệt')) {
    return 'Mình thấy bạn đang không ổn 😢. Nếu cần mình lắng nghe nè.';
  }
  if (lower.includes('vui') || lower.includes('tuyệt')) {
    return 'Wow nghe có vẻ là một ngày tuyệt vời đó nha! 🌟';
  }
  return 'Cảm ơn bạn đã chia sẻ. Mình luôn ở đây nếu bạn cần tâm sự 💬';
}
