import React from 'react';
import Badge from '../../components/Badge/Badge';
import ButtonCta from '../../components/ButtonCta/ButtonCta';
import ModelViewer from '../../components/ModelViewer/ModelViewer';
import PriceTag from '../../components/PriceTag/PriceTag';
import StreetSign from '../../components/StreetSign/StreetSign';
import {
    BadgeWrapper,
    Button,
    CtaWrapper,
    PriceTagWrapper,
    Slogan,
    Wrapper,
} from './Hero.style';

export type HeroProps = {};

export function Hero(_props: HeroProps) {
    return (
        <Wrapper className='Hero-wrapper' data-testid='Hero-wrapper'>
            <Slogan>We've got your back</Slogan>
            <ModelViewer />

            <PriceTagWrapper>
                <PriceTag />
            </PriceTagWrapper>
            <BadgeWrapper>
                <Badge />
            </BadgeWrapper>
            <CtaWrapper>
                <ButtonCta />
            </CtaWrapper>
        </Wrapper>
    );
}

export default Hero;
