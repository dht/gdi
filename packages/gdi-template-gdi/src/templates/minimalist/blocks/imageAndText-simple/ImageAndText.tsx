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
} from './ImageAndText.style';

export const id = 'com.usegdi.templates.minimalist.imageAndText-simple';

export type ImageAndTextProps = {
    sequence?: number;
    strings: ImageAndTextStrings;
    colors: ImageAndTextColors;
    extra: ImageAndTextExtra;
};

export type ImageAndTextStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type ImageAndTextColors = {
    background?: string;
    text?: string;
};

export type ImageAndTextExtra = {
    href: string;
    imageUrl?: string;
    backgroundImageUrl?: string;
};

export function ImageAndText(props: ImageAndTextProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { backgroundImageUrl, imageUrl, href = '#' } = extra;

    let style: Json = {};

    if (backgroundImageUrl) {
        style['backgroundImage'] = `url(${backgroundImageUrl})`;
    }

    return (
        <Container
            className='ImageAndText-container'
            data-testid='ImageAndText-container'
            colors={colors}
            style={style}
        >
            <Wrapper>
                {imageUrl && (
                    <ImageWrapper>
                        <Image src={imageUrl} />
                    </ImageWrapper>
                )}
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
            </Wrapper>
        </Container>
    );
}

export default ImageAndText;
