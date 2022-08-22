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
    Beta,
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
    imageCreditsTitle?: string;
    imageCreditsDescription?: string;
};

export type HeroColors = {
    background?: string;
    text?: string;
};

export type HeroExtra = {
    headerFontSize: number;
    href: string;
    hrefSecond?: string;
    imageUrl: string;
    showBeta?: boolean;
};

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const {
        slogan,
        header,
        description,
        ctaButtonText,
        secondButtonText,
        imageCreditsTitle,
        imageCreditsDescription,
    } = strings;
    const {
        imageUrl,
        href = '#',
        hrefSecond = '#',
        headerFontSize = 42,
        showBeta,
    } = extra;

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
                    <H1 size={headerFontSize}>
                        {header}
                        {showBeta && <Beta>beta</Beta>}
                    </H1>
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
                {imageCreditsTitle && (
                    <ImageCredits>
                        <ImageCreditsTitle>
                            {imageCreditsTitle}
                        </ImageCreditsTitle>
                        <ImageCreditDescription>
                            {imageCreditsDescription}
                        </ImageCreditDescription>
                    </ImageCredits>
                )}
            </Wrapper>
        </Container>
    );
}

export default Hero;
