import React, { useContext } from 'react';
import { SiteContext } from '@gdi/engine';
import {
    Actions,
    Container,
    Row,
    Column,
    Demo,
    H1,
    Button,
    Image,
    Slogan,
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

    const { ga } = useContext(SiteContext);

    const onClick = (label: string) => () => {
        ga('navigate', {
            category: 'hero',
            label,
        });
    };

    return (
        <Wrapper className='Hero-wrapper' data-testid='Hero-wrapper'>
            <Container>
                <Row>
                    <Column>
                        <Slogan>{slogan}</Slogan>
                        <H1>{header}</H1>
                        <Install installation={installation} />
                        <Actions>
                            <Button
                                href={href}
                                target='_blank'
                                onClick={onClick('href')}
                            >
                                {ctaButtonText}
                            </Button>
                            <Button
                                href={hrefSecondary}
                                target='_blank'
                                onClick={onClick('hrefSecond')}
                            >
                                {secondaryButtonText}
                            </Button>
                        </Actions>
                    </Column>
                    <Column>
                        <Demo className='animate__animated animate__fadeInRight'>
                            <Image src={imageUrl} />
                        </Demo>
                    </Column>
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Hero;
