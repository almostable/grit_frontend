'use client';

import { useEffect, useState } from 'react';

export function FutureDateButton({ offsetDays = 10 }) {
  const [dateLabel, setDateLabel] = useState('');

  // Месяцы в родительном падеже
  const months = {
    january: 'января',
    february: 'февраля',
    march: 'марта',
    april: 'апреля',
    may: 'мая',
    june: 'июня',
    july: 'июля',
    august: 'августа',
    september: 'сентября',
    october: 'октября',
    november: 'ноября',
    december: 'декабря',
  };

  useEffect(() => {
    const future = new Date();
    future.setDate(future.getDate() + offsetDays);
    const day = future.getDate();
    const month = future
      .toLocaleString('en-US', { month: 'long' })
      .toLowerCase();

    // Используем словарь для правильного падежа
    const formattedMonth = months[month];
    const formatted = `${day} ${formattedMonth}`;
    setDateLabel(formatted);
  }, [offsetDays]);

  return dateLabel;
}
