import React from 'react';
import { Wrapper } from './ArticleEditorBreadcrumbs.style';

export type ArticleEditorBreadcrumbsProps = {};

export function ArticleEditorBreadcrumbs(
    _props: ArticleEditorBreadcrumbsProps
) {
    return (
        <Wrapper
            className='ArticleEditorBreadcrumbs-wrapper'
            data-testid='ArticleEditorBreadcrumbs-wrapper'
        >
            ArticleEditorBreadcrumbs
        </Wrapper>
    );
}

export default ArticleEditorBreadcrumbs;
