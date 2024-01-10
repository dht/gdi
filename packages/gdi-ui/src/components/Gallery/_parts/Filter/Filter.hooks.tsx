import { useEffect, useRef, useState } from 'react';

export function useMeasureOnce() {
  const ref = useRef<HTMLDivElement>(null);

  const [measures, setMeasures] = useState<Json>({});

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const { width, height } = ref.current.getBoundingClientRect();

    setMeasures({
      width,
      height,
    });
  }, []);

  return [ref, measures] as [React.RefObject<any>, Json];
}
