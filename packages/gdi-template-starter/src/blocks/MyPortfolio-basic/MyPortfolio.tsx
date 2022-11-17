import React from 'react';
import {
    Container,
    Actions,
    CTA,
    Details,
    H1,
    Image,
    ImageWrapper,
    P,
    Slogan,
    Wrapper,
} from './MyPortfolio.style';

export const id = 'com.usegdi.templates.starter.myPortfolio-basic';

export type MyPortfolioProps = {
    strings: MyPortfolioStrings;
    colors: MyPortfolioColors;
    extra: MyPortfolioExtra;
};

export type MyPortfolioStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type MyPortfolioColors = {
    background?: string;
    text?: string;
};

export type MyPortfolioExtra = {
    href: string;
    imageUrl: string;
};

export function MyPortfolio(props: MyPortfolioProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='MyPortfolio-container'
            data-testid='MyPortfolio-container'
            colors={colors}
        >
            <Wrapper>
                <Details>
                    {slogan && <Slogan colors={colors}>{slogan}</Slogan>}
                    <H1>{header}</H1>
                    {description && <P>{description}</P>}
                    <Actions>
                        <CTA colors={colors} href={href}>
                            {ctaButtonText}
                        </CTA>
                    </Actions>
                </Details>
                <ImageWrapper>
                    <Image src={imageUrl} />
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
}

export default MyPortfolio;
