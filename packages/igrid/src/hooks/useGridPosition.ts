import { RefObject, useCallback, useState } from 'react';
import { IGridConfig, IGridPosition } from '../grid.types';
import { useBoundingBox } from './useBoundingBox';
import { useListener } from './useListener';
import { useThrottle } from './useThrottle';

const THROTTLE_FOR_MOUSE_MOVE = 50;

export function useGridPosition(ref: RefObject<HTMLDivElement>, gridOptions: IGridConfig) {
  const [boundingBox] = useBoundingBox(ref);
  const [gridPosition, setGridPosition] = useState<IGridPosition>();

  const calculatePosition = useCallback(
    (ev: MouseEvent) => {
      if (!boundingBox) return;

      const { clientX, clientY } = ev;
      const top = clientY - boundingBox.top;
      const left = clientX - boundingBox.left;

      const x = Math.ceil(left / 25);
      const y = Math.ceil(top / 25);

      setGridPosition({
        x,
        y,
        rawPixels: {
          top,
          left,
          absoluteTop: clientY,
          absoluteLeft: clientX,
        },
      });
    },
    [boundingBox, gridOptions]
  );

  const onMove = useThrottle(calculatePosition, THROTTLE_FOR_MOUSE_MOVE);
  useListener('mousemove', ref, onMove);

  return [gridPosition];
}
