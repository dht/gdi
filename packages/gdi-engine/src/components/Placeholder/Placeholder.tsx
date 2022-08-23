import { IElement } from '@gdi/store-mixer';
import React from 'react';
import { Container, Header, P } from './Placeholder.style';

export type PlaceholderProps = {
    element: IElement;
};

export function Placeholder(props: PlaceholderProps) {
    const { element } = props;
    const { elementType } = element;

    return (
        <Container
            className='Placeholder-container'
            data-testid='Placeholder-container'
        >
            <Header>Placeholder for {elementType}</Header>
            <P>Populate with a block from the library</P>
        </Container>
    );
}

export default Placeholder;
