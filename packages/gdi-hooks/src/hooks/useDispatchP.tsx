import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useDispatchP() {
    const dispatch = useDispatch();

    const dispatchP = useCallback(
        (action: any) => {
            return new Promise((resolve, reject) => {
                dispatch({
                    ...action,
                    resolve,
                    reject,
                });
            });
        },
        [dispatch]
    );

    return dispatchP;
}
