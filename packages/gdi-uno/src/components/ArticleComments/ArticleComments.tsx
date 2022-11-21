import React from 'react';
import { Container } from './ArticleComments.style';

export type ArticleCommentsProps = {};

export function ArticleComments(_props: ArticleCommentsProps) {
    return (
        <Container className="ArticleComments-container" data-testid="ArticleComments-container">
            ArticleComments
        </Container>
    );
}

export default ArticleComments;
