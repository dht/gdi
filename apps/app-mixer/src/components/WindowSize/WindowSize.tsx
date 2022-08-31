import React from 'react';
import { useWindowSize } from 'react-use';
import {
    Container,
    Height,
    Row,
    Times,
    Units,
    Width,
} from './WindowSize.style';

export type WindowSizeProps = {};

export function WindowSize(_props: WindowSizeProps) {
    const { width, height } = useWindowSize();

    return (
        <Container
            className='WindowSize-container'
            data-testid='WindowSize-container'
        >
            <Row>
                <Width>{width.toLocaleString()}</Width>
                <Times>x</Times>
                <Height>{height.toLocaleString()}</Height>
                <Units>px</Units>
            </Row>
        </Container>
    );
}

export default WindowSize;
