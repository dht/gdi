import React from 'react';
import { useMeasure } from 'react-use';
import HeroArticle from '../../widgets/HeroArticle/HeroArticle';
import HeroBottomArticle from '../../widgets/HeroBottomArticle/HeroBottomArticle';
import { data } from './Hero.data';
import { Container, Wrapper } from './SixPack.style';

export const id = 'com.usegdi.templates.tech.sixPack-basic';

export type SixPackProps = {
    strings: SixPackStrings;
    colors: SixPackColors;
    extra: SixPackExtra;
};

export type SixPackStrings = {};

export type SixPackColors = {};

export type SixPackExtra = {};

export function SixPack(props: SixPackProps) {
    const { strings, colors, extra } = props;
    const [ref, { width }] = useMeasure<HTMLDivElement>();

    console.log('width ->', width);

    function renderArticle(article: any, index: number) {
        return (
            <HeroArticle
                key={article.id}
                index={index}
                article={article}
                totalWidth={width}
            />
        );
    }

    function renderArticles() {
        return data.map((article: any, index) => renderArticle(article, index));
    }

    return (
        <Container
            className='SixPack-container'
            data-testid='SixPack-container'
            width={width}
            ref={ref}
        >
            {renderArticles()}
            <HeroBottomArticle />
        </Container>
    );
}

export default SixPack;
