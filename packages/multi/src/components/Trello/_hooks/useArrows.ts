import { Callback, useKey } from './useKey';

export function useArrows(callback: Callback, depArray: any[] = []) {
  return useKey(
    callback,
    {
      filterKeys: ['ArrowUp', 'ArrowRight', 'ArrowLeft', 'ArrowDown'],
    },
    depArray
  );
}
