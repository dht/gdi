import React from 'react';
import {
    Container,
    Actions,
    CTA,
    Details,
    H1,
    Image,
    ImageWrapper,
    Wrapper,
} from './Tester.style';

export const id = 'com.usegdi.templates.starter.tester-basic';

export type TesterProps = {
    strings: TesterStrings;
    colors: TesterColors;
    extra: TesterExtra;
};

export type TesterStrings = {
    header: string;
    ctaButtonText: string;
};

export type TesterColors = {
    background?: string;
    text?: string;
};

export type TesterExtra = {
    href: string;
    imageUrl: string;
    backgroundImageUrl: string;
};

export function Tester(props: TesterProps) {
    const { strings, colors, extra } = props;
    const { header, ctaButtonText } = strings;
    const { backgroundImageUrl, imageUrl, href } = extra;

    return (
        <Container
            className='Tester-container'
            data-testid='Tester-container'
            colors={colors}
            imageUrl={backgroundImageUrl}
        >
            <Wrapper>
                <Details>
                    <H1>{header}</H1>
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

export default Tester;
