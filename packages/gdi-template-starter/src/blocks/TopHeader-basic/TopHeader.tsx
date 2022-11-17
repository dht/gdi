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
} from './TopHeader.style';

export const id = 'com.usegdi.templates.starter.topHeader-basic';

export type TopHeaderProps = {
    strings: TopHeaderStrings;
    colors: TopHeaderColors;
    extra: TopHeaderExtra;
};

export type TopHeaderStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type TopHeaderColors = {
    background?: string;
    text?: string;
};

export type TopHeaderExtra = {
    href: string;
    imageUrl: string;
};

export function TopHeader(props: TopHeaderProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='TopHeader-container'
            data-testid='TopHeader-container'
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

export default TopHeader;
