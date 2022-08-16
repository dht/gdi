import { useEffect, useState } from 'react';

const EVENT_NAME = 'visibilitychange';

export const useTabFocus = () => {
    const [hasFocus, setHasFocus] = useState(isVisible());

    useEffect(() => {
        const onVisibilityChange = () => {
            setHasFocus(isVisible());
        };

        document.addEventListener(EVENT_NAME, onVisibilityChange);

        return () => {
            document.removeEventListener(EVENT_NAME, onVisibilityChange);
        };
    }, []);

    return hasFocus;
};

const isVisible = () => document.visibilityState === 'visible';
