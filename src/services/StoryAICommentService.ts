export async function getCommentForStory(friendName: string, caption: string): Promise<string> {
  const captionLower = caption.toLowerCase();
  if (captionLower.includes('trà sữa') || captionLower.includes('học')) {
    return `${friendName} nói: "Cũng muốn nghỉ học đi trà sữa chung nè 😆"`;
  }
  if (captionLower.includes('trời') || captionLower.includes('đẹp')) {
    return `${friendName} nói: "Hôm nay thật đẹp đúng không? ☀️ Đi dạo đi!"`;
  }
  return `${friendName} nói: "Cảm ơn bạn đã xem story của mình nha 💕"`;
}
