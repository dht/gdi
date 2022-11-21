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

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container className='Hero-container' data-testid='Hero-container'>
            <Wrapper>
                <Column>
                    <Slogan>There's a new CMS in town</Slogan>
                    <H1>gDI</H1>

                    <Install />
                    <Actions>
                        <Button
                            href='https://usegdi.com/docs/docs/getting-started/installation'
                            target='_blank'
                        >
                            Get started
                        </Button>
                        <Button href='https://usegdi.com/demo' target='new'>
                            View demo
                        </Button>
                    </Actions>
                </Column>
                <Column>
                    <Demo className='animate__animated animate__fadeInRight'>
                        <DemoTop />
                        <DemoBottom />
                        <Image src='/hero.png' />
                    </Demo>
                </Column>
            </Wrapper>
        </Container>
    );
}

export default Hero;
