import { useEffect, useState } from 'react';
import { useKey } from './useKey';
import { useLocalStorage } from 'react-use';

type CopyCallback = () => string | number | boolean;
type PasteCallback = (value?: string | number | boolean) => void;

export function useCopyPaste(
    copyCallback: CopyCallback,
    pasteCallback: PasteCallback,
    depArray: any[] = []
) {
    const [state, setState] = useLocalStorage<string | number | boolean>(
        'CLIPBOARD',
        ''
    );

    useKey(
        () => {
            const value = copyCallback();
            setState(value);
        },
        { filterKeys: ['c'], filterModifiers: ['metaKey'] },
        depArray
    );

    useKey(
        () => {
            pasteCallback(state);
        },
        { filterKeys: ['v'], filterModifiers: ['metaKey'] },
        [state, ...depArray]
    );
}
