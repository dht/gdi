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
} from './LayoutGrid.style';

export const id = 'com.useGdi.templates.gdi.layout-grid';

export type LayoutGridProps = {
    strings: LayoutGridStrings;
    colors: LayoutGridColors;
    extra: LayoutGridExtra;
};

export type LayoutGridStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type LayoutGridColors = {
    background?: string;
    text?: string;
};

export type LayoutGridExtra = {
    href: string;
    imageUrl: string;
};

export function LayoutGrid(props: LayoutGridProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='LayoutGrid-container'
            data-testid='LayoutGrid-container'
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

export default LayoutGrid;
