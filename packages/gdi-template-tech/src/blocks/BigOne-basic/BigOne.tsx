import React from 'react';
import LargeArticle from '../../widgets/LargeArticle/LargeArticle';
import { data } from '../SixPack-basic/Hero.data';
import { Container, Wrapper } from './BigOne.style';

export const id = 'com.usegdi.templates.tech.bigOne-basic';

export type BigOneProps = {
    strings: BigOneStrings;
    colors: BigOneColors;
    extra: BigOneExtra;
};

export type BigOneStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type BigOneColors = {
    background?: string;
    text?: string;
};

export type BigOneExtra = {
    href: string;
    imageUrl: string;
};

export function BigOne(props: BigOneProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='BigOne-container'
            data-testid='BigOne-container'
            colors={colors}
        >
            <Wrapper>
                <LargeArticle article={data[0]} />
            </Wrapper>
        </Container>
    );
}

export default BigOne;
