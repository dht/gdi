import React from 'react';
import { Wrapper, Polygon, Svg } from './Divider.style';

export type DividerProps = {
    color1: string;
    color2: string;
};

export function Divider(props: DividerProps) {
    const { color1, color2 } = props;

    return (
        <Wrapper className='Divider-wrapper' data-testid='Divider-wrapper'>
            <Svg width='100%' viewBox='0 0 300 4'>
                <Polygon points='0,0 300,0 300,4' fill={color1} />
                <Polygon points='0,0 0,4 300,4' fill={color2} />
            </Svg>
        </Wrapper>
    );
}

export default Divider;
