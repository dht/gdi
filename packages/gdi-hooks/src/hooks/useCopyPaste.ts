import { useEffect, useState } from 'react';
import { useKey } from './useKey';
import { useLocalStorage } from 'react-use';

type CopyCallback = () => string;
type PasteCallback = (value?: string) => void;

export function useCopyPaste(
    copyCallback: CopyCallback,
    pasteCallback: PasteCallback,
    depArray: any[] = []
) {
    const [state, setState] = useLocalStorage<string>('CLIPBOARD', '');

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
