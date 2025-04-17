export async function sendMessageToAI(name: string, message: string): Promise<string> {
  try {
    const prompt = `
Bạn là một người bạn tên là ${name}, hãy trả lời tin nhắn sau một cách thân thiện và gần gũi:
"${message}"
`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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', // ← Đổi chỗ này thành key của anh
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Bạn là một người bạn thân thiện luôn quan tâm đến người dùng.' },
          { role: 'user', content: prompt },
        ],
      }),
    });

    const json = await response.json();
    return json.choices[0].message.content.trim();
  } catch (err) {
    console.error(err);
    return 'Oops! Mình bị lag mất rồi 😓';
  }
}
