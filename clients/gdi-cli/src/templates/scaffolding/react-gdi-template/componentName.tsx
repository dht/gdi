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
} from './$CMP.style';

export const id = 'com.usegdi.templates.basic.$CMPCC-simple';

export type $CMPProps = {
    strings: $CMPStrings;
    colors: $CMPColors;
    extra: $CMPExtra;
};

export type $CMPStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type $CMPColors = {
    background?: string;
    text?: string;
};

export type $CMPExtra = {
    href: string;
    imageUrl: string;
};

export function $CMP(props: $CMPProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href = '#' } = extra;

    return (
        <Container
            className="$CMP-container"
            data-testid="$CMP-container"
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

export default $CMP;
