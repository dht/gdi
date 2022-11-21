import React from 'react';
import { Container, H1, Wrapper, Greeting, Skill, Social } from './Hero.style';
import { SocialIcons } from '@gdi/web-ui';

export const id = 'com.usegdi.templates.starter.hero-basic';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type HeroColors = {
    background?: string;
    text?: string;
};

export type HeroExtra = {
    href: string;
    imageUrl: string;
};

const urls = ['https://twitter.com/elonmusk', 'https://www.behance.net/dlanid'];

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description } = strings;

    return (
        <Container
            className='Hero-container'
            data-testid='Hero-container'
            extra={extra}
        >
            <Wrapper>
                <Greeting colors={colors}>{slogan}</Greeting>
                <H1>{header}</H1>
                <Skill>{description}</Skill>
                <Social>
                    <SocialIcons grayscale urls={urls} />
                </Social>
            </Wrapper>
        </Container>
    );
}

export default Hero;
