import { useCallback, useState } from 'react';
import { useList } from 'react-use';

type UseSelectionOptions = {
  enabled?: boolean;
  allowMultiple?: boolean;
  allowEmpty?: boolean;
  noUnselect?: boolean;
};

type UseSelectionReturn = [
  string[],
  string,
  {
    onClick: (id: string) => void;
    onClear: () => void;
    onFocus: (id: string) => void;
    onFocusClear: () => void;
  }
];

export function useSelection(
  initialValues: string[],
  options: UseSelectionOptions = {}
): UseSelectionReturn {
  const { enabled, allowMultiple, allowEmpty, noUnselect } = options;
  const [value, { push, removeAt, clear }] = useList(initialValues);
  const [focusedId, setFocusedId] = useState('');

  const onClick = useCallback(
    (id: string) => {
      const exists = value.includes(id);
      const isEmpty = value.length === 0;

      if (!enabled) {
        return;
      }

      if (exists) {
        // prevent empty selection
        if (value.length === 1 && !allowEmpty) {
          return;
        }

        if (noUnselect) {
          return;
        }

        removeAt(value.indexOf(id));
      } else {
        // prevent multiple
        if (!allowMultiple && !isEmpty) {
          clear();
        }

        push(id);
      }
    },
    [value]
  );

  const onClear = useCallback(() => {
    const firstItem = value[0];

    clear();

    if (!allowEmpty && firstItem) {
      push(firstItem);
    }
  }, [value]);

  const onFocus = useCallback((id: string) => {
    setFocusedId(id);
  }, []);

  const onFocusClear = useCallback(() => {
    setFocusedId('');
  }, []);

  return [value, focusedId, { onClick, onClear, onFocus, onFocusClear }];
}
