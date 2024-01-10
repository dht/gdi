import React, { useEffect, useState } from 'react';

import { throttle } from 'lodash';

export type Point = {
  x: number;
  y: number;
};

export function useMouseMove(on: boolean, start: Point = { x: 0, y: 0 }) {
  const [delta, setDelta] = useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (ev: any) => {
      const point = { x: ev.clientX, y: ev.clientY };

      const delta = {
        x: point.x - start.x,
        y: point.y - start.y,
      };

      setDelta(delta);
    };

    const onMouseMoveThrottled = throttle(onMouseMove, 10);

    if (!on) {
      setDelta({ x: 0, y: 0 });
      document.removeEventListener('mousemove', onMouseMoveThrottled);
      return;
    }

    document.addEventListener('mousemove', onMouseMoveThrottled);

    return () => {
      document.removeEventListener('mousemove', onMouseMoveThrottled);
    };
  }, [on]);

  return delta;
}
