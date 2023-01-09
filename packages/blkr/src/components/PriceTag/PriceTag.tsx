import React from 'react';
import { Bottom, Center, Left, Right, Top, Wrapper } from './PriceTag.style';

export type PriceTagProps = {
    rotation?: number;
};

export function PriceTag(props: PriceTagProps) {
    const { rotation = 10 } = props;

    return (
        <Wrapper
            className='PriceTag-wrapper'
            data-testid='PriceTag-wrapper'
            rotation={rotation}
        >
            <Top>$289</Top>
            <Center>
                <Left>Only*</Left>
                <Right>
                    <i>$</i>185
                    <span>95</span>
                </Right>
            </Center>
            <Bottom>* For early city birds</Bottom>
        </Wrapper>
    );
}

export default PriceTag;
