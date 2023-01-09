import React from 'react';
import { Image, Wrapper } from './ButtonCta.style';

export type ButtonCtaProps = {};

export function ButtonCta(_props: ButtonCtaProps) {
    return (
        <Wrapper className='ButtonCta-wrapper' data-testid='ButtonCta-wrapper'>
            <Image src='/button-kickstarter.svg' />
        </Wrapper>
    );
}

export default ButtonCta;
