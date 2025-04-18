export function getScheduledMessage(): { time: string; message: string } | null {
  const now = new Date();
  const hour = now.getHours();

  if (hour === 7) {
    return {
      time: now.toISOString(),
      message: 'Chúc bạn một ngày thật tươi vui nhé 🌞',
    };
  }

  if (hour === 22) {
    return {
      time: now.toISOString(),
      message: 'Chúc bạn ngủ ngon nhé! 💤',
    };
  }

  return null;
}
