import React, { useEffect, useRef } from 'react';
import { Container } from './Install.style';

export type InstallProps = {};

export function Install(_props: InstallProps) {
    const ref = useTypeIn();

    return (
        <Container
            className='Install-container'
            data-testid='Install-container'
            contentEditable={true}
            suppressContentEditableWarning={true}
            autoCorrect='off'
            spellCheck='false'
            ref={ref}
        >
            npm install -g @gdi/cli
        </Container>
    );
}

function useTypeIn() {
    const ref = useRef<HTMLInputElement>(null);

    const moveCursorToEnd = () => {
        if (!ref.current) {
            return;
        }

        let range, selection;
        range = document.createRange();
        range.selectNodeContents(ref.current);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    };

    const type = async (value: string) => {
        if (!ref.current) {
            return;
        }

        for (let i = 0; i < value.length; i++) {
            ref.current.innerText = value.slice(0, i + 1);
            moveCursorToEnd();
            await delay(20 + Math.random() * 20);
        }

        ref.current.blur();
    };

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const value = ref.current.innerText;
        ref.current.innerText = '';
        type(value);
    });

    return ref;
}

export default Install;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
