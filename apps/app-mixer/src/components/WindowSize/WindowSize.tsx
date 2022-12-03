import React from 'react';
import { useWindowSize } from 'react-use';
import { Wrapper, Height, Row, Times, Units, Width } from './WindowSize.style';

export type WindowSizeProps = {};

export function WindowSize(_props: WindowSizeProps) {
    const { width, height } = useWindowSize();

    return (
        <Wrapper
            className='WindowSize-wrapper'
            data-testid='WindowSize-wrapper'
        >
            <Row>
                <Width>{width.toLocaleString()}</Width>
                <Times>x</Times>
                <Height>{height.toLocaleString()}</Height>
                <Units>px</Units>
            </Row>
        </Wrapper>
    );
}

export default WindowSize;
