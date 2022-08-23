import { IElement } from '@gdi/store-mixer';
import React from 'react';
import { Container, Header, P } from './Error.style';

export type ErrorProps = {
    element: IElement;
};

export function Error(props: ErrorProps) {
    const { element } = props;
    const { widgetId } = element;

    return (
        <Container className='Error-container' data-testid='Error-container'>
            <Header>Could not find block {widgetId}</Header>
            <P>Install required dependencies</P>
        </Container>
    );
}

export default Error;
