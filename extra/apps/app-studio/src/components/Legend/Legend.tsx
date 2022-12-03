import React from 'react';
import { Wrapper, Line, Rectangle, Title } from './Legend.style';

export type LegendProps = {};

export function Legend(_props: LegendProps) {
    return (
        <Wrapper className='Legend-wrapper' data-testid='Legend-wrapper'>
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
        </Wrapper>
    );
}

export default Legend;
