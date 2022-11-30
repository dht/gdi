import React from 'react';
import {
    Author,
    AuthorName,
    Container,
    Description,
    Image,
    Slogan,
    Title,
} from './LargeArticle.style';

import classnames from 'classnames';

export type LargeArticleProps = {
    article: any;
    horizontal?: boolean;
};

export function LargeArticle(props: LargeArticleProps) {
    const { horizontal, article } = props;
    const { title, slogan, authorName, imageUrl } = article;

    const className = classnames('LargeArticle-container', {
        horizontal,
    });

    const style = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <Container className={className} data-testid='LargeArticle-container'>
            <Description className='description'>
                <Title className='title'>{title}</Title>
                {slogan && <Slogan className='slogan'>{slogan}</Slogan>}
                <Author className='author'>
                    By <AuthorName>{authorName}</AuthorName>
                </Author>
            </Description>
            <Image className='image' style={style} />
        </Container>
    );
}

export default LargeArticle;
