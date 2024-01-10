import { useEffect } from 'react';
import { addListener } from 'shared-base';
import { Json } from '../grid.types';

export function useCustomEvent(eventName: string, callback: (data: Json) => void) {
  useEffect(() => {
    const clear = addListener(eventName, callback);

    return () => {
      clear();
    };
  }, []);
}
