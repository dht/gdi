import React from 'react';
import { Container, Header, P } from './Placeholder.style';

export type PlaceholderProps = {
    element: IElement;
};

export function Placeholder(props: PlaceholderProps) {
    const { element } = props;
    const { widget } = element;
    const { widgetType = '' } = widget ?? {};

    return (
        <Container
            className='Placeholder-container'
            data-testid='Placeholder-container'
        >
            <Header>Placeholder for {widgetType}</Header>
            <P>Populate with a widget from the library</P>
        </Container>
    );
}

export default Placeholder;
