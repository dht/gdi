import React from 'react';
import { IUnoSection } from '../../types';
import { Wrapper } from './ArticleComments.style';

export type ArticleCommentsProps = {
    data: Json;
    section: IUnoSection;
};

export function ArticleComments(_props: ArticleCommentsProps) {
    return (
        <Wrapper
            className='ArticleComments-wrapper'
            data-testid='ArticleComments-wrapper'
        >
            ArticleComments
        </Wrapper>
    );
}

export default ArticleComments;
