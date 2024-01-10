import { RefObject, useEffect } from 'react';

export function useClickAway(
  ref: RefObject<HTMLDivElement>,
  callback: (ev: any) => void,
  delay: number = 0,
  devArray: any[] = []
) {
  useEffect(() => {
    function isInRef(element: EventTarget) {
      let output = false;

      let cursor: ParentNode | null = element as ParentNode;

      while (cursor) {
        cursor = cursor.parentNode;
        if (cursor === ref.current) {
          output = true;
        }
      }

      return output;
    }

    function onClick(ev: any) {
      if (!isInRef(ev.target)) {
        callback(ev);
      }
    }

    const timeout = setTimeout(() => {
      document.addEventListener('mousedown', onClick);
    }, delay);

    return () => {
      document.removeEventListener('mousedown', onClick);
      clearTimeout(timeout);
    };
  }, [...devArray]);
}
