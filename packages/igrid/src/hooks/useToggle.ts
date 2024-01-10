import { useState, useCallback } from 'react';

export function useToggle(initialValue: boolean) {
    const [state, setState] = useState(initialValue);

    const toggle = useCallback(() => {
        setState(!state);
    }, [state]);

    return [state, toggle] as [boolean, () => void];
}
