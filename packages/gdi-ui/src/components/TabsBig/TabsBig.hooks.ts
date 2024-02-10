import { useEffect, useRef, useState } from 'react';

export function useSlide(tabs: Json[], activeTab: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const index = tabs.findIndex((tab) => tab.id === activeTab);

    try {
      const boundingBoxParent = ref.current.getBoundingClientRect();
      const boundingBox = ref.current.children[index].getBoundingClientRect();
      setLeft(boundingBox.left - boundingBoxParent.left);
      setWidth(boundingBox.width);
    } catch (_err) {}
  }, [activeTab]);

  return [ref, { left, width }] as const;
}
