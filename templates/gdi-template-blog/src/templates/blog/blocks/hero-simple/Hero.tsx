import React from 'react';
import {
    Container,
    Details,
    H1,
    Slogan,
    Wrapper,
    ImageCredits,
    ImageCreditsTitle,
    ImageCreditDescription,
    Beta,
    DateText,
} from './Hero.style';
import { format } from 'date-fns';

export const id = 'com.usegdi.templates.blog.hero-simple';

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

const now = new Date();

export function Hero(props: HeroProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, imageCreditsTitle, imageCreditsDescription } =
        strings;
    const { imageUrl, headerFontSize = 42, showBeta } = extra;

    const style = {
        backgroundImage: `url(${imageUrl})`,
    };

    const dateText = format(now, 'iiii, MMMM d, yyyy');

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
                    <DateText>{dateText}</DateText>
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
