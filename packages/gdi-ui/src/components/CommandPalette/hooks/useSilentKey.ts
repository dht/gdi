import { useCallback } from 'react';
import { useKey } from 'react-use';

type Callback = (ev: any) => void;

export function useSilentKey(keyName: string, callback: Callback, on: boolean, depArray: any[]) {
  const onKey = useCallback(
    (ev: any) => {
      if (on) {
        ev.preventDefault();
        callback(ev);
      }
    },
    [callback, on]
  );

  useKey(keyName, onKey, {}, [...depArray, on]);
}
