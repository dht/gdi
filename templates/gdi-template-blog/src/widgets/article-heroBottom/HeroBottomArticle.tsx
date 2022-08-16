import React from 'react';
import {
    Author,
    AuthorName,
    Column,
    Container,
    Slogan,
    Title,
} from './HeroBottomArticle.style';

export const id = 'com.useGdi.templates.blog.article-heroBottom';

export type HeroBottomArticleProps = {};

export function HeroBottomArticle(_props: HeroBottomArticleProps) {
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
