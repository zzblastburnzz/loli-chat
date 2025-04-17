export async function getCommentForStory(friendName: string, caption: string): Promise<string> {
  const text = caption.toLowerCase();

  if (text.includes('trà sữa') || text.includes('ăn') || text.includes('uống')) {
    return `${friendName} nói: "Trà sữa là chân ái luôn á 😍 Mình rủ bạn đi cùng được không?"`;
  }

  if (text.includes('buồn') || text.includes('mệt') || text.includes('áp lực')) {
    return `${friendName} nói: "Mình thấy bạn đang không ổn 😔. Mình luôn ở đây nếu bạn cần chia sẻ nhé!"`;
  }

  if (text.includes('trời') || text.includes('đẹp') || text.includes('dạo')) {
    return `${friendName} nói: "Đi dạo một chút cùng mình chứ? ☀️🌿"`;
  }

  if (text.includes('học') || text.includes('lười')) {
    return `${friendName} nói: "Học cùng nhau cho vui nhé 📚✏️. Mình cũng đang cố gắng lắm nè!"`;
  }

  return `${friendName} nói: "Cảm ơn bạn đã xem story của mình nha 💕 Có gì muốn chia sẻ không?"`;
}
