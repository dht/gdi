import React from 'react';
import {
    Container,
    Column,
    Title,
    Author,
    Slogan,
    AuthorName,
} from './HeroBottomArticle.style';

export const id = 'com.usegdi.templates.gdi.heroBottomArticle-basic';

export type HeroBottomArticleProps = {};

export function HeroBottomArticle(props: HeroBottomArticleProps) {
    return (
        <Container
            className='HeroBottomArticle-container'
            data-testid='HeroBottomArticle-container'
        >
            <Column>
                <Title>
                    Tesla removes 2022 production date from Cybertruck website
                </Title>
                <Author>
                    By <AuthorName>James Vincent</AuthorName>
                </Author>
            </Column>
            <Column>
                <Slogan>Cybertruck's future is hard to forsee</Slogan>
            </Column>
        </Container>
    );
}

export default HeroBottomArticle;
