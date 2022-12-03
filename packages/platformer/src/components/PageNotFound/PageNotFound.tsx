import { Icon } from '@gdi/web-ui';
import React from 'react';
import { Wrapper, H1, I } from './PageNotFound.style';

export type PageNotFoundProps = {};

export function PageNotFound(_props: PageNotFoundProps) {
    return (
        <Wrapper
            className='PageNotFound-wrapper'
            data-testid='PageNotFound-wrapper'
        >
            <I className='material-icons'>find_in_page</I>
            <H1>Page not found</H1>
        </Wrapper>
    );
}

export default PageNotFound;
