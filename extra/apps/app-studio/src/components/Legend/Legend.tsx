import React from 'react';
import { Container, Line, Rectangle, Title } from './Legend.style';

export type LegendProps = {};

export function Legend(_props: LegendProps) {
    return (
        <Container className='Legend-container' data-testid='Legend-container'>
            <Line>
                <Rectangle color='orange'></Rectangle>
                <Title>Tooling</Title>
            </Line>
            <Line>
                <Rectangle color='magenta'></Rectangle>
                <Title>Outsource</Title>
            </Line>
            <Line>
                <Rectangle color='yellowgreen'></Rectangle>
                <Title>Knowledge</Title>
            </Line>
        </Container>
    );
}

export default Legend;
