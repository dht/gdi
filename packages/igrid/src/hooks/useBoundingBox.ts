import { RefObject, useEffect, useState } from 'react';
import { IBoundingBox } from '../grid.types';

export function useBoundingBox(ref: RefObject<HTMLDivElement>) {
  const [boundingBox, setBoundingBox] = useState<IBoundingBox>();

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const box = current.getBoundingClientRect();

    setBoundingBox({
      top: box.top,
      left: box.left,
      width: box.width,
      height: box.height,
    });
  }, [ref]);

  return [boundingBox] as [IBoundingBox];
}
