import React from 'react';
import { Container } from './Share.style';

export type ShareProps = {};

export function Share(_props: ShareProps) {
    return (
        <Container className='Share-container' data-testid='Share-container'>
            Share
        </Container>
    );
}

export default Share;
