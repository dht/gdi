import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Action } from 'redux';

type Callback = (action: Action) => void;

export const useAction = (actionType: string, callback: Callback) => {
    const store = useStore();

    useEffect(() => {
        let unsubscribe = store.subscribe(() => {
            const state = store.getState() as any;
            const lastAction = state._lastAction;

            if (lastAction && lastAction.type === actionType) {
                callback(lastAction);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [callback]);
};
