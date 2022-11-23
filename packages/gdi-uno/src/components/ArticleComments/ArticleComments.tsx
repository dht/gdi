import React from 'react';
import { IUnoSection } from '../../types';
import { Container } from './ArticleComments.style';

export type ArticleCommentsProps = {
    data: Json;
    section: IUnoSection;
};

export function ArticleComments(_props: ArticleCommentsProps) {
    return (
        <Container
            className='ArticleComments-container'
            data-testid='ArticleComments-container'
        >
            ArticleComments
        </Container>
    );
}

export default ArticleComments;
