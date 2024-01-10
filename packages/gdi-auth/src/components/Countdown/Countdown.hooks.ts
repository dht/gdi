import { useEffect, useRef, useState } from 'react';

export function useCountdown(seconds: number) {
  const [countdown, setCountdown] = useState(8);
  const interval = useRef<any>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  });

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(interval.current);
    }
  }, [countdown]);

  return countdown;
}

export default useCountdown;
