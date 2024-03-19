import { useCustomEvent, useMount } from '@gdi/ui';
import { useEffect } from 'react';
import { useSetState } from 'react-use';
import { getJson, setJson } from 'shared-base';

export function useLocalDb<T extends Object>(id: string, initialState: T) {
  const [state, patchState] = useSetState<T>(initialState);

  const key = `useLocalDb/${id}`;

  useMount(() => {
    const data = getJson(key) as Partial<T>;
    if (!data) return;
    patchState(data);
  });

  useEffect(() => {
    if (state === initialState) return;
    setJson(key, state);
  }, [state]);

  useCustomEvent(
    `useLocalDb/${id}`,
    (ev: any) => {
      Object.keys(ev).forEach((key) => {
        patchState({ [key]: ev[key] } as any);
      });
    },
    [state]
  );

  return [state, patchState] as const;
}

export class LocalDbPatcher {
  constructor(private id: string) {}

  patch(state: Json) {
    setJson(`useLocalDb/${this.id}`, state);
  }
}
