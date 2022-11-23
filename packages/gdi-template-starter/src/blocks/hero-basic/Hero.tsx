import React, { useContext, useMemo } from 'react';
import { Container, H1, Wrapper, Greeting, Skill, Social } from './Hero.style';
import { SocialIcons } from '@gdi/web-ui';
import { useDataset } from '@gdi/engine';

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
};

export type HeroColors = {};

export type HeroExtra = {
    imageUrl: string;
    socialDatasetId: string;
};

const urls = ['https://twitter.com/elonmusk', 'https://www.behance.net/dlanid'];

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description } = strings;
    const { socialDatasetId } = extra;

    const social = useDataset(socialDatasetId);
    const urls = Object.values(social).map((i: Json) => i.url);

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
