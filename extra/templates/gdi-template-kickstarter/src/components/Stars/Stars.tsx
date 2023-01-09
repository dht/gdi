import React from 'react';
import { Image, Wrapper } from './Stars.style';

export type StarsProps = {};

export function Stars(_props: StarsProps) {
    return (
        <Wrapper className='Stars-wrapper' data-testid='Stars-wrapper'>
            <Image src='/stars.png' />
        </Wrapper>
    );
}

export default Stars;
