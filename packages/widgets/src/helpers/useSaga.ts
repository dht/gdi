import { useEffect } from 'react';
import { invokeEvent } from 'shared-base';

export function useSagas(ids: string[], enabled = true) {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    for (const id of ids) {
      invokeEvent('sagas/start', { id });
    }

    return () => {
      for (const id of ids) {
        invokeEvent('sagas/stop', { id });
      }
    };
  }, []);
}

export function useSaga(id: string, enabled = true) {
  return useSagas([id], enabled);
}
