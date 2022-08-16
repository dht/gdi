import React from 'react';
import {
    Author,
    AuthorName,
    Container,
    Description,
    Image,
    Title,
} from './LineArticle.style';

export const id = 'com.useGdi.templates.blog.article-line';

export type LineArticleProps = {
    article: any;
};

export function LineArticle(props: LineArticleProps) {
    const { article } = props;
    const { id, title, imageUrl, authorName } = article;

    const style = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <Container
            className='LineArticle-container'
            data-testid='LineArticle-container'
        >
            <Image className='image' style={style} />
            <Description className='description'>
                <Title className='title'>{title}</Title>
                <Author className='author'>
                    By <AuthorName>{authorName}</AuthorName>
                </Author>
            </Description>
        </Container>
    );
}

export default LineArticle;
