import React from 'react';
import { Container } from './Code.style';
import { Code as CodeEditor } from '@gdi/web-ui';

export type CodeProps = {};

export function Code(props: CodeProps) {
    return (
        <Container className='Code-container' data-testid='Code-container'>
            <CodeEditor />
        </Container>
    );
}

export default Code;
