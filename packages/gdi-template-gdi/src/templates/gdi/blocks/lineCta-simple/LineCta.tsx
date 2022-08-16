import React from 'react';
import { Link } from 'react-router-dom';
import { Container, CTA, Wrapper, Message } from './LineCta.style';

export const id = 'com.useGdi.templates.gdi.lineCta-simple';

export type LineCtaProps = {
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
    const { textStrong, text, ctaButtonText } = strings;
    const { href } = extra;

    return (
        <Container
            className='LineCta-container'
            data-testid='LineCta-container'
            colors={colors}
        >
            <Wrapper>
                <Message>
                    <strong>{textStrong}</strong>
                    {text}
                </Message>
                <Link to={href}>
                    <CTA colors={colors}>{ctaButtonText}</CTA>
                </Link>
            </Wrapper>
        </Container>
    );
}

export default LineCta;
