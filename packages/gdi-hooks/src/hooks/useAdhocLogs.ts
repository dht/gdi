import { useCallback, useMemo, useRef } from 'react';
import { useList } from 'react-use';
import { ts } from 'shared-base';
import { useCustomEvent } from './useCustomEvent';

export function useAdhocLogs() {
    const [list, { push, updateAt }] = useList<Json>([]);
    const ref = useRef<number>(1);

    const now = useMemo(() => ts(), []);

    const deltaText = useCallback(() => {
        const delta = (ts() - now) / 1000;
        return delta.toFixed(2);
    }, []);

    const addLog = (data: Json) => {
        const id = ref.current++;
        const timestamp = ts();
        const timestampText = deltaText();

        push({
            id,
            timestamp,
            timestampText,
            ...data,
        });
    };

    useCustomEvent(
        'ADHOC_LOG',
        (data: Json) => {
            addLog(data);
        },
        [list]
    );

    useCustomEvent(
        'ADHOC_LOG_START',
        (data: Json) => {
            addLog({
                isRunning: true,
                ...data,
            });
        },
        [list]
    );

    useCustomEvent(
        'ADHOC_LOG_END',
        (data: Json) => {
            const index = list.findIndex(
                (item) => item.eventId === data.eventId
            );

            if (index < 0) {
                return;
            }

            updateAt(index, {
                ...list[index],
                timestampEnd: ts(),
                timestampText: deltaText(),
                isRunning: false,
                ...data,
            });
        },
        [list]
    );

    return list;
}
