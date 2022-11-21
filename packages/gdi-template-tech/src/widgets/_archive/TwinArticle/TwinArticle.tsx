import React from 'react';
import {
    Author,
    AuthorName,
    Column,
    Container,
    Slogan,
    Title,
} from './TwinArticle.style';

export type TwinArticleProps = {
    article: any;
};

export function TwinArticle(props: TwinArticleProps) {
    const { article } = props;
    const { title, slogan, authorName } = article;

    return (
        <Container
            className='TwinArticle-container'
            data-testid='TwinArticle-container'
        >
            <Column>
                <Title>{title}</Title>
                <Author>
                    By <AuthorName>{authorName}</AuthorName>
                </Author>
            </Column>
            <Column>
                <Slogan>{slogan}</Slogan>
            </Column>
        </Container>
    );
}

export default TwinArticle;
