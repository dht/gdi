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

export type CtaLineStrings = {};

export type CtaLineColors = {};

export type CtaLineExtra = {};

export function CtaLine(props: CtaLineProps) {
    const { strings, colors, extra } = props;

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
