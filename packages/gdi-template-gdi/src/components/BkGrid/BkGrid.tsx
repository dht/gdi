import React from 'react';
import Divider from '../Divider/Divider';
import { Wrapper, Flex } from './BkGrid.style';

export type BkGridProps = {
    color1: string;
    color2: string;
    color3?: string;
    color4?: string;
};

export function BkGrid(props: BkGridProps) {
    const { color1, color2, color3, color4 } = props;

    return (
        <Wrapper className='BkGrid-wrapper' data-testid='BkGrid-wrapper'>
            <Divider color1={color1} color2={color2} />
            <Flex />
            <Divider color1={color3 || color1} color2={color4 || color2} />
        </Wrapper>
    );
}

export default BkGrid;
