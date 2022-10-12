import React from 'react';
import {
    Container,
    Actions,
    Cta,
    Details,
    Wrapper,
    Text,
} from './LineCta.style';

export const id = 'com.usegdi.templates.starter.lineCta-simple';

export type LineCtaProps = {
    sequence?: number;
    strings: LineCtaStrings;
    colors: LineCtaColors;
    extra: LineCtaExtra;
};

export type LineCtaStrings = {
    textStrong?: string;
    text: string;
    ctaButtonText: string;
};

export type LineCtaColors = {
    background?: string;
    text?: string;
};

export type LineCtaExtra = {
    href: string;
};

export function LineCta(props: LineCtaProps) {
    const { strings, colors, extra } = props;
    const { text, textStrong, ctaButtonText } = strings;
    const { href = '#' } = extra;

    return (
        <Container
            className='LineCta-container'
            data-testid='LineCta-container'
            colors={colors}
        >
            <Wrapper>
                <Details>
                    <Text>
                        <strong>{textStrong}</strong>
                        {text}
                    </Text>
                </Details>
                <Actions>
                    <Cta colors={colors} href={href}>
                        {ctaButtonText}
                    </Cta>
                </Actions>
            </Wrapper>
        </Container>
    );
}

export default LineCta;
