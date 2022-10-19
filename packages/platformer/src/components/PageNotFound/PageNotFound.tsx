import { Icon } from '@gdi/web-ui';
import React from 'react';
import { Container, H1, I } from './PageNotFound.style';

export type PageNotFoundProps = {};

export function PageNotFound(_props: PageNotFoundProps) {
    return (
        <Container
            className='PageNotFound-container'
            data-testid='PageNotFound-container'
        >
            <I className='material-icons'>find_in_page</I>
            <H1>Page not found</H1>
        </Container>
    );
}

export default PageNotFound;
