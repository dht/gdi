import React from 'react';
import { Wrapper, Flex } from './BkSolid.style';
import Divider from '../Divider/Divider';

export type BkSolidProps = {
    bk: string;
    color1: string;
    color2: string;
    color3?: string;
    color4?: string;
};

export function BkSolid(props: BkSolidProps) {
    const { bk, color1, color2, color3, color4 } = props;

    const style: React.CSSProperties = {
        backgroundColor: bk,
    };

    return (
        <Wrapper
            className='BkSolid-wrapper'
            data-testid='BkSolid-wrapper'
            style={style}
        >
            <Divider color1={color1} color2={color2} />
            <Flex />
            <Divider color1={color3 || color1} color2={color4 || color2} />
        </Wrapper>
    );
}

export default BkSolid;
