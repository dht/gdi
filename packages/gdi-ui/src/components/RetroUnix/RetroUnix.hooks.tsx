import { useEffect, useRef, useState } from 'react';

export function useTyping(content: string, millis = 70) {
  const [value, setValue] = useState('');
  const timeout = useRef<any>(null);

  useEffect(() => {
    let index = 0;

    function type() {
      index++;
      const char = content[index - 1];

      const next = content.slice(0, index);

      setValue(next.replace(/\|/g, ''));

      if (next.length < content.length) {
        const delay = char === '|' ? 10 * millis : millis;
        timeout.current = setTimeout(type, delay);
      }
    }

    type();

    return () => {
      clearTimeout(timeout.current);
    };
  }, [content]);

  return value;
}
