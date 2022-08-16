import React from 'react';
import {
    Container,
    Actions,
    CTA,
    Details,
    H1,
    P,
    Slogan,
    Wrapper,
    ImageCredits,
    ImageCreditsTitle,
    ImageCreditDescription,
    SecondButton,
} from './Hero.style';

export const id = 'com.usegdi.templates.gdi.hero-simple';

export type HeroProps = {
    sequence?: number;
    strings: HeroStrings;
    colors: HeroColors;
    extra: HeroExtra;
};

export type HeroStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
    secondButtonText?: string;
};

export type HeroColors = {
    background?: string;
    text?: string;
};

export type HeroExtra = {
    headerSize: number;
    href: string;
    hrefSecond?: string;
    imageUrl: string;
};

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText, secondButtonText } =
        strings;
    const { imageUrl, href = '#', hrefSecond = '#', headerSize = 42 } = extra;

    const style = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <Container
            className='Hero-container'
            data-testid='Hero-container'
            colors={colors}
            style={style}
        >
            <Wrapper>
                <Details>
                    {slogan && <Slogan colors={colors}>{slogan}</Slogan>}
                    <H1 size={headerSize}>{header}</H1>
                    {description && <P>{description}</P>}
                    <Actions>
                        <CTA colors={colors} href={href}>
                            {ctaButtonText}
                        </CTA>
                        {secondButtonText && (
                            <SecondButton colors={colors} href={hrefSecond}>
                                {secondButtonText}
                            </SecondButton>
                        )}
                    </Actions>
                </Details>
                <ImageCredits>
                    <ImageCreditsTitle>
                        MidJourney AI-generated image
                    </ImageCreditsTitle>
                    <ImageCreditDescription>
                        futuristic phone concept neon colorful abstract --ar 3:2
                    </ImageCreditDescription>
                </ImageCredits>
            </Wrapper>
        </Container>
    );
}

export default Hero;
