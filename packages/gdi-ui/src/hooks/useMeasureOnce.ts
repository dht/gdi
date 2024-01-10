import { useEffect, useRef, useState } from 'react';

export function useMeasureOnce() {
  const ref = useRef<HTMLDivElement>(null);
  const [bounds, set] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      set(ref.current.getBoundingClientRect());
    }
  }, []);

  return [ref, bounds] as const;
}
