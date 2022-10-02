import { useCallback, useEffect } from 'react';
import { useList } from 'react-use';

type UseSelectionOptions = {
    enabled?: boolean;
    allowMultiple?: boolean;
    allowEmpty?: boolean;
};

type UseSelectionReturn = [
    string[],
    {
        onClick: (id: string) => void;
        onClear: () => void;
    }
];

export function useSelection(
    initialValues: string[],
    options: UseSelectionOptions = {}
): UseSelectionReturn {
    const { enabled, allowMultiple, allowEmpty } = options;
    const [value, { push, removeAt, clear }] = useList(initialValues);

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
                removeAt(value.indexOf(id));
            } else {
                // prevent multiple
                if (!allowMultiple && !isEmpty) {
                    removeAt(0);
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

    return [value, { onClick, onClear }];
}
