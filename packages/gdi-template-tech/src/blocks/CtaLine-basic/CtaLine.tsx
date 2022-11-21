import React from 'react';
import TwinArticle from '../../widgets/TwinArticle/TwinArticle';
import { data } from '../SixPack-basic/Hero.data';
import { Container, Wrapper } from './CtaLine.style';

export const id = 'com.usegdi.templates.tech.ctaLine-basic';

export type CtaLineProps = {
    strings: CtaLineStrings;
    colors: CtaLineColors;
    extra: CtaLineExtra;
};

export type CtaLineStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type CtaLineColors = {
    background?: string;
    text?: string;
};

export type CtaLineExtra = {
    href: string;
    imageUrl: string;
};

export function CtaLine(props: CtaLineProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='CtaLine-container'
            data-testid='CtaLine-container'
            colors={colors}
        >
            <Wrapper>
                <TwinArticle article={data[1]} />
            </Wrapper>
        </Container>
    );
}

export default CtaLine;
