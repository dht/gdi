import React from 'react';
import { Wrapper, Header, P } from './Placeholder.style';

export type PlaceholderProps = {
    element: IElement;
};

export function Placeholder(props: PlaceholderProps) {
    const { element } = props;
    const { widget } = element;
    const { widgetType = '' } = widget ?? {};

    return (
        <Wrapper
            className='Placeholder-wrapper'
            data-testid='Placeholder-wrapper'
        >
            <Header>Placeholder for {widgetType}</Header>
            <P>Populate with a widget from the library</P>
        </Wrapper>
    );
}

export default Placeholder;
