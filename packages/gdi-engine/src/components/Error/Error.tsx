import React from 'react';
import { Wrapper, Header, P } from './Error.style';

export type ErrorProps = {
    element: IElement;
};

export function Error(props: ErrorProps) {
    const { element } = props;
    const { widgetId } = element;

    return (
        <Wrapper className='Error-wrapper' data-testid='Error-wrapper'>
            <Header>Could not find widget {widgetId}</Header>
            <P>Install required dependencies</P>
        </Wrapper>
    );
}

export default Error;
