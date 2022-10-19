import { useEffect, useState } from 'react';

export type Callback = (event: KeyboardEvent) => void;

export function useKeyHold(callback: Callback, depArray: any[] = []) {
    const [key, setKey] = useState('');

    useEffect(() => {
        const onKeyDown = (ev: KeyboardEvent) => {
            setKey(ev.key);
        };

        const onKeyUp = (ev: KeyboardEvent) => {
            setKey('');
            callback(ev);
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        };
    }, depArray);

    return key;
}
