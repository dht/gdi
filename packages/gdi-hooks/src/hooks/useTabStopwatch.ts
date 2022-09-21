import { useEffect, useState } from 'react';
import { guid4, ts } from 'shared-base';
import { useLocalStorage, useInterval } from 'react-use';
import { useTabFocus } from './useTabFocus';

export const useTabStopwatch = (callback: Callback, delay: number = 1000) => {
    const hasFocus = useTabFocus();

    useInterval(
        () => {
            callback();
        },
        hasFocus ? delay : null
    );
};
