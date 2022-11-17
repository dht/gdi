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
} from './Quotes.style';

export const id = 'com.usegdi.templates.starter.quotes-basic';

export type QuotesProps = {
    strings: QuotesStrings;
    colors: QuotesColors;
    extra: QuotesExtra;
};

export type QuotesStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type QuotesColors = {
    background?: string;
    text?: string;
};

export type QuotesExtra = {
    href: string;
    imageUrl: string;
};

export function Quotes(props: QuotesProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='Quotes-container'
            data-testid='Quotes-container'
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

export default Quotes;
