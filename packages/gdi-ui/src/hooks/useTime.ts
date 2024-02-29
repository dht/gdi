import { useEffect, useState } from 'react';

const now = () => {
  const output = new Date();
  return output;
};

export function useTime(is24Hours: boolean) {
  const [time, setTime] = useState(now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(now());
    }, 1000);
    return () => clearInterval(interval);
  });

  const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return time.toLocaleTimeString([], {
    timeStyle: 'short',
    hour12: !is24Hours,
    timeZone: currentTimeZone,
  });
}
