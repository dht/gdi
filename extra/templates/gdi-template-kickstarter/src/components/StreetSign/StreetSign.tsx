import React from 'react';
import {
    Inner,
    Sign1,
    Sign2,
    Sign3,
    Slogan,
    Text,
    Wrapper,
} from './StreetSign.style';

export type StreetSignProps = {};

export function StreetSign(_props: StreetSignProps) {
    return (
        <Wrapper
            className='StreetSign-wrapper'
            data-testid='StreetSign-wrapper'
        >
            <Sign1>
                <Text>Urban Blvd.</Text>
            </Sign1>
            <Sign2>
                <Text>KickStarter St.</Text>
            </Sign2>
            <Sign3>
                <Text>Bag Avenue</Text>
            </Sign3>
        </Wrapper>
    );
}

export default StreetSign;
