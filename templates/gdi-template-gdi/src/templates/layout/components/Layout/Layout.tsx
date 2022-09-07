import React from 'react';
import { Container, Wrapper } from './Layout.style';

export type LayoutProps = {};

export function Layout(props: LayoutProps) {
    return (
        <Container className='Layout-container' data-testid='Layout-container'>
            <Wrapper>layout</Wrapper>
        </Container>
    );
}

export default Layout;
