import { useKey } from 'react-use';

export function useAlphaNumericKey(callback: (event: KeyboardEvent) => void, depArray: any[] = []) {
  useKey(
    (ev: KeyboardEvent) => {
      const { key } = ev;
      const isNumber = !isNaN(Number(key));
      const isLetter = key.length === 1 && key.match(/[a-z]/i) !== null;
      const isDash = ['-', ' '].includes(key);
      const noSpecialKeys = ev.altKey === false && ev.ctrlKey === false && ev.metaKey === false;

      return (isNumber || isLetter || isDash) && noSpecialKeys;
    },
    (ev) => {
      callback(ev);
    },
    {},
    depArray
  );
}
