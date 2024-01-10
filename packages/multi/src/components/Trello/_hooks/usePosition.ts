import { RefObject, useState, useEffect } from 'react';
import { IDndPoint } from '../Trello.types';

export function usePosition(ref: RefObject<HTMLDivElement>) {
  const [position, setPosition] = useState<IDndPoint>({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const box = ref.current.getBoundingClientRect();
    setPosition({
      y: box.top,
      x: box.left,
    });
  }, []);

  return position;
}
