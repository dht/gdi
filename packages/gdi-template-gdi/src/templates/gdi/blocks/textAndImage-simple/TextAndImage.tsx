import React from 'react';
import {
    Container,
    Details,
    Image,
    ImageWrapper,
    P,
    Slogan,
    Wrapper,
    Section,
    H2,
} from './TextAndImage.style';

export const id = 'com.useGdi.templates.gdi.textAndImage-simple';

export type TextAndImageProps = {
    strings: TextAndImageStrings;
    colors: TextAndImageColors;
    extra: TextAndImageExtra;
};

export type TextAndImageStrings = {
    slogan?: string;
    title: string;
    description?: string;
};

export type TextAndImageColors = {
    background?: string;
    text?: string;
};

export type TextAndImageExtra = {
    isImageWide?: boolean;
    imageUrl: string;
};

export function TextAndImage(props: TextAndImageProps) {
    const { strings, colors, extra } = props;
    const { slogan, title, description } = strings;
    const { imageUrl, isImageWide } = extra;

    return (
        <Container
            className='TextAndImage-container'
            data-testid='TextAndImage-container'
            colors={colors}
        >
            <Section id={`feature-${id}`} />
            <Wrapper className='wrapper'>
                <Details>
                    <Slogan>{slogan}</Slogan>
                    <H2>{title}</H2>
                    <P>{description}</P>
                </Details>
                <ImageWrapper className='image'>
                    <Image src={imageUrl} wide={isImageWide} />
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
}

export default TextAndImage;
