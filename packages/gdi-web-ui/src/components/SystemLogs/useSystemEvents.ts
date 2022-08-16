import { listenToSystemEvents } from 'shared-base';
import { useEffect } from 'react';
import { useList } from 'react-use';
import { ISystemEvent } from '../../types';

export function useSystemEvents() {
    const [events, { push }] = useList<ISystemEvent>([]);

    useEffect(() => {
        const unListen = listenToSystemEvents((data: Json) => {
            push(data as ISystemEvent);
        });

        return () => {
            unListen();
        };
    });

    return events;
}
