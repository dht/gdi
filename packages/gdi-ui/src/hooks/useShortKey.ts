import { useCallback } from 'react';
import { useKey } from './useKey';
import { IShortKey } from '../types';

type CallbackWithId = (id: string, ev?: KeyboardEvent) => void;

export function useShortKeys(
  shortKeys: IShortKey[] = [],
  callback: CallbackWithId,
  depArray: any[] = []
) {
  const onKey = useCallback((event: IShortKey) => {
    const matchingShortKey = shortKeys.find((shortKey) => isMatching(event, shortKey));

    if (matchingShortKey && callback) {
      if (matchingShortKey.preventDefault) {
        event.ev?.preventDefault();
      }

      callback(matchingShortKey.id || '', event.ev);
    }
  }, depArray);

  useKey(onKey);
}

export function useShortKey(shortKey?: IShortKey, callback?: CallbackWithId, depArray: any[] = []) {
  const onKey = useCallback((event: IShortKey) => {
    if (shortKey && isMatching(event, shortKey) && callback) {
      if (shortKey.preventDefault) {
        event.ev?.preventDefault();
      }

      callback(shortKey.id || '', event.ev);
    }
  }, depArray);

  useKey(onKey, {}, depArray);
}

const isMatching = (event: IShortKey, shortKey: IShortKey) => {
  const sameKey = event.key === shortKey.key || event.code === shortKey.code;
  const altOk = compare(event.withAlt, shortKey.withAlt);
  const commandOk = compare(event.withCommand, shortKey.withCommand);
  const shiftOk = compare(event.withShift, shortKey.withShift);
  const ctrlOk = compare(event.withCtrl, shortKey.withCtrl);

  return sameKey && altOk && commandOk && shiftOk && ctrlOk;
};

const compare = (a: boolean | undefined, b: boolean | undefined) => {
  return (
    a == b || (typeof a === 'undefined' && b === false) || (a === false && typeof b === 'undefined')
  );
};
