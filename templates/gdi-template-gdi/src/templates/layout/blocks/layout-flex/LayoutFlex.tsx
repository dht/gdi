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
} from './LayoutFlex.style';

export const id = 'com.useGdi.templates.gdi.layout-flex';

export type LayoutFlexProps = {
    strings: LayoutFlexStrings;
    colors: LayoutFlexColors;
    extra: LayoutFlexExtra;
};

export type LayoutFlexStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type LayoutFlexColors = {
    background?: string;
    text?: string;
};

export type LayoutFlexExtra = {
    href: string;
    imageUrl: string;
};

export function LayoutFlex(props: LayoutFlexProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='LayoutFlex-container'
            data-testid='LayoutFlex-container'
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

export default LayoutFlex;
