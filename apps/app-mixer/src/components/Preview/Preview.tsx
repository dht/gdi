import React from 'react';
import { Container } from './Preview.style';
import { IElement } from '@gdi/store-mixer';
import { EngineView } from '@gdi/engine';

export type PreviewProps = {
    elements: IElement[];
};

export function Preview(props: PreviewProps) {
    const { elements } = props;

    return (
        <Container
            className='Preview-container'
            data-testid='Preview-container'
        >
            <EngineView elements={elements} />
        </Container>
    );
}

export default Preview;
