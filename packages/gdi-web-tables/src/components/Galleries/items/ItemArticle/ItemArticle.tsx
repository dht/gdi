import React from 'react';
import { Container } from './ItemArticle.style';

export type ItemArticleProps = {};

export function ItemArticle(_props: ItemArticleProps) {
    return (
        <Container className="ItemArticle-container" data-testid="ItemArticle-container">
            ItemArticle
        </Container>
    );
}

export default ItemArticle;
