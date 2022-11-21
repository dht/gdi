import React from 'react';
import LineArticle from '../../widgets/LineArticle/LineArticle';
import { data } from '../SixPack-basic/Hero.data';
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
} from './FourPack.style';

export const id = 'com.usegdi.templates.tech.fourPack-basic';

export type FourPackProps = {
    strings: FourPackStrings;
    colors: FourPackColors;
    extra: FourPackExtra;
};

export type FourPackStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type FourPackColors = {
    background?: string;
    text?: string;
};

export type FourPackExtra = {
    href: string;
    imageUrl: string;
};

export function FourPack(props: FourPackProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='FourPack-container'
            data-testid='FourPack-container'
            colors={colors}
        >
            <Wrapper>
                <LineArticle article={data[0]} />
                <LineArticle article={data[1]} />
                <LineArticle article={data[2]} />
                <LineArticle article={data[3]} />
            </Wrapper>
        </Container>
    );
}

export default FourPack;
