import React from 'react';
import {
    Actions,
    Column,
    Container,
    Demo,
    H1,
    Button,
    Image,
    Slogan,
    DemoTop,
    DemoBottom,
    Wrapper,
} from './Hero.style';
import Install from '../../components/Install/Install';

export const id = 'com.usegdi.templates.gdi.hero-basic';

export type HeroProps = {
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    ctaButtonText: string;
    secondaryButtonText: string;
};

export type HeroColors = {};

export type HeroExtra = {
    href: string;
    imageUrl: string;
    hrefSecondary?: string;
    installation?: string;
};

export function Hero(props: HeroProps) {
    const { strings, extra } = props;
    const { slogan, header, ctaButtonText, secondaryButtonText } = strings;
    const { imageUrl, href, hrefSecondary, installation } = extra;

    return (
        <Container className='Hero-container' data-testid='Hero-container'>
            <Wrapper>
                <Column>
                    <Slogan>{slogan}</Slogan>
                    <H1>{header}</H1>
                    <Install installation={installation} />
                    <Actions>
                        <Button href={href} target='_blank'>
                            {ctaButtonText}
                        </Button>
                        <Button href={hrefSecondary} target='_blank'>
                            {secondaryButtonText}
                        </Button>
                    </Actions>
                </Column>
                <Column>
                    <Demo className='animate__animated animate__fadeInRight'>
                        <DemoTop />
                        <DemoBottom />
                        <Image src={imageUrl} />
                    </Demo>
                </Column>
            </Wrapper>
        </Container>
    );
}

export default Hero;
