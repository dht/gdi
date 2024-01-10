import { useEffect, useRef, useState } from 'react';

const MILLIS_PER_CHARACTER = 40;

export function useKaraoke(content: string, duration?: number): string[] {
  const interval = useRef<number>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let millisPerCharacter = MILLIS_PER_CHARACTER;

    if (duration) {
      millisPerCharacter = (duration * 0.8) / content.length;
    }

    interval.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, millisPerCharacter);

    return () => clearInterval(interval.current);
  }, [duration]);

  useEffect(() => {
    if (index >= content.length) {
      clearInterval(interval.current);
    }
  }, [index]);

  return [content.slice(0, index), content.slice(index)];
}
