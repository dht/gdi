import { get } from 'lodash';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useKey, useUnmount } from 'react-use';
import { invokeEvent, sortBy } from 'shared-base';
import { IListState, Sort } from './List.types';
import { getNextId, isModalOpen } from './List.utils';

type Params = {
  root: string;
  state: IListState;
  patchState: (change: Partial<IListState>) => void;
  isFocused: boolean;
};

type Callback = (ev: KeyboardEvent) => void;

export function useKeyRegex(regex: RegExp, callback: Callback, depArray: any[]) {
  useEffect(() => {
    function onKeyDown(ev: KeyboardEvent) {
      if (ev.key.match(regex)) {
        callback(ev);
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [...depArray]);
}

export function useKeyFunctions(callback: Callback, depArray: any[]) {
  useKeyRegex(/^F[0-9]+$/, callback, depArray);
}

export function useListData(data: Json[], sort: Sort, q: string) {
  const filteredAndSortedData = useMemo(() => {
    const stickyItems = data.filter((item) => item.isSticky);

    const nonStickyItems = data
      .filter((item) => !item.isSticky)
      .filter((item) => {
        const { fileName } = item;
        return !q || fileName.toLowerCase().includes(q.toLowerCase());
      })
      .sort(sortBy(sort.field, sort.direction));

    return [...stickyItems, ...nonStickyItems];
  }, [data, sort, q]);

  return filteredAndSortedData;
}

export function useListSearch(_data: Json[], params: Params) {
  const { isFocused, state, patchState } = params;
  const { q } = state;

  const callbacks = useMemo(
    () => ({
      onSearch: (ev: any) => {
        if (!isFocused || isModalOpen()) {
          return;
        }

        const char = ev.key;
        const newQ = q + char;
        patchState({ q: newQ });
      },
      onBackspace: () => {
        if (!isFocused || !q || isModalOpen()) {
          return;
        }

        patchState({
          q: q.slice(0, -1),
        });
      },
    }),
    [state, isFocused]
  );

  useKeyRegex(/^[a-zA-Z0-9.]$/, callbacks.onSearch, [callbacks]);
  useKey('Backspace', callbacks.onBackspace, { event: 'keydown' }, [callbacks]);
}

export function useListSelection(data: Json[], params: Params) {
  const { isFocused, state, patchState } = params;
  const { q, focusedId } = state;

  const callbacks = useMemo(
    () => ({
      onDown: (ev: any) => {
        if (!isFocused) return;
        ev.preventDefault();
        const nextId = getNextId(data, focusedId, 1);
        patchState({ focusedId: nextId });
      },
      onUp: (ev: any) => {
        if (!isFocused) return;
        ev.preventDefault();
        const nextId = getNextId(data, focusedId, -1);
        patchState({ focusedId: nextId });
      },
      onPageUp: (ev: any) => {
        if (!isFocused) return;
        ev.preventDefault();
        const nextId = getNextId(data, focusedId, -15);
        patchState({ focusedId: nextId });
      },
      onPageDown: (ev: any) => {
        if (!isFocused) return;
        ev.preventDefault();
        const nextId = getNextId(data, focusedId, 15);
        patchState({ focusedId: nextId });
      },
      onHome: (ev: any) => {
        if (!isFocused) return;
        ev.preventDefault();
        const nextId = getNextId(data, focusedId, -100);
        patchState({ focusedId: nextId });
      },
      onEnd: (ev: any) => {
        if (!isFocused) return;
        ev.preventDefault();
        const nextId = getNextId(data, focusedId, 100);
        patchState({ focusedId: nextId });
      },
    }),
    [isFocused, data, state]
  );

  useEffect(() => {
    const focusedIndex = data
      .filter((item) => item.id !== '$up')
      .findIndex((item) => item.id === focusedId);

    if (focusedIndex === -1 && data.length >= 0) {
      const firstItem = data[1] || data[0];
      const nextItem = q ? firstItem : data[0];
      if (focusedId === nextItem?.id) return;
      patchState({ focusedId: nextItem?.id });
    }
  }, [data, state]);

  useEffect(() => {
    invokeEvent('list/focusChange', { focusedId });
  }, [focusedId]);

  useKey('ArrowDown', callbacks.onDown, { event: 'keydown' }, [callbacks]);
  useKey('ArrowUp', callbacks.onUp, { event: 'keydown' }, [callbacks]);
  useKey('PageDown', callbacks.onPageDown, { event: 'keydown' }, [callbacks]);
  useKey('PageUp', callbacks.onPageUp, { event: 'keydown' }, [callbacks]);
  useKey('Home', callbacks.onHome, { event: 'keydown' }, [callbacks]);
  useKey('End', callbacks.onEnd, { event: 'keydown' }, [callbacks]);
}

export function useListNavigation(data: Json[], params: Params, cbs: any) {
  const { root, state, patchState, isFocused } = params;
  const { focusedId, q } = state;
  const timeout = useRef<any>();

  const onDrillUp = useCallback(() => {
    patchState({ focusedId: '' });
    cbs.onDrillUp();
    timeout.current = setTimeout(() => patchState({ q: '', focusedId: root }), 50);
  }, [root]);

  const callbacks = useMemo(
    () => ({
      onBackspace: () => {
        if (!isFocused || q || isModalOpen()) {
          return;
        }
        onDrillUp();
      },
      onDrillDown: () => {
        const asset = data.find((item) => item.id === focusedId);

        if (!isFocused || !asset || isModalOpen()) return;

        if (get(asset, 'contentType') !== 'folder') {
          cbs.onPreview(asset);
          return;
        }
        if (asset.id === '$up') {
          onDrillUp();
        } else {
          cbs.onDrillDown(asset);
          // prevent flicker
          timeout.current = setTimeout(() => patchState({ q: '' }), 50);
        }
      },
      onFunctionKey: (ev: any) => {
        if (!isFocused || isModalOpen()) return;
        ev.preventDefault();
        const asset = data.find((item) => item.id === focusedId);
        cbs.onFunctionKey(asset, ev.key, ev);
      },
    }),
    [isFocused, data, state, onDrillUp]
  );

  useKey('Enter', callbacks.onDrillDown, { event: 'keydown' }, [callbacks]);
  useKey('Backspace', callbacks.onBackspace, { event: 'keydown' }, [callbacks]);
  useKeyFunctions(callbacks.onFunctionKey, [callbacks]);

  useUnmount(() => {
    clearTimeout(timeout.current);
  });
}

export function useMeasureOnce() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setState({ width, height });
  }, []);

  return [ref, state] as const;
}
