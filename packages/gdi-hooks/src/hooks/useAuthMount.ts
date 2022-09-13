import { useEffect, useState } from 'react';
import { getBoolean } from 'shared-base';

const AUTH_EVENT_NAME = 'AUTHENTICATION_COMPLETED';

type Callback = () => boolean;

export const useAuthMount = (
    callback: Callback,
    item: unknown | undefined | null
) => {
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (done || !item) {
            return;
        }

        const listener = () => {
            if (item) {
                run();
            }
        };

        const run = () => {
            callback();
            setDone(true);
            document.removeEventListener(AUTH_EVENT_NAME, listener);
        };

        const isLoggedIn = getBoolean('AUTHENTICATION_COMPLETED');
        if (isLoggedIn) {
            run();
            return;
        }

        document.addEventListener(AUTH_EVENT_NAME, listener);

        return () => {
            document.removeEventListener(AUTH_EVENT_NAME, listener);
        };
    }, [item, done]);
};
