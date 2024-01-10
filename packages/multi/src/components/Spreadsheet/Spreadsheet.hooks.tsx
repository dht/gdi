import { useKey } from 'react-use';
import { ICoord } from './Spreadsheet.types';
import { useState } from 'react';

export function useArrows(initialCoord: ICoord) {
  const [coord, setCoord] = useState(initialCoord);

  useKey('ArrowUp', () => {
    setCoord((prevCoord) => {
      const { x, y } = prevCoord;
      const nextY = Math.max(1, y - 1);
      return { x, y: nextY };
    });
  });

  useKey('ArrowDown', () => {
    setCoord((prevCoord) => {
      const { x, y } = prevCoord;
      const nextY = Math.min(30, y + 1);
      return { x, y: nextY };
    });
  });

  useKey('ArrowLeft', () => {
    setCoord((prevCoord) => {
      const { x, y } = prevCoord;
      const nextX = Math.max(1, x - 1);
      return { x: nextX, y };
    });
  });

  useKey('ArrowRight', () => {
    setCoord((prevCoord) => {
      const { x, y } = prevCoord;
      const nextX = Math.min(15, x + 1);
      return { x: nextX, y };
    });
  });

  return [coord, setCoord] as const;
}
