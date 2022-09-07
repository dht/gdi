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
} from './LayoutFlow.style';

export const id = 'com.useGdi.templates.gdi.layout-flow';

export type LayoutFlowProps = {
    strings: LayoutFlowStrings;
    colors: LayoutFlowColors;
    extra: LayoutFlowExtra;
};

export type LayoutFlowStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type LayoutFlowColors = {
    background?: string;
    text?: string;
};

export type LayoutFlowExtra = {
    href: string;
    imageUrl: string;
};

export function LayoutFlow(props: LayoutFlowProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='LayoutFlow-container'
            data-testid='LayoutFlow-container'
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

export default LayoutFlow;
