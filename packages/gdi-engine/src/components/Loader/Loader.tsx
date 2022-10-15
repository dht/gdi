import React from 'react';
import { Container } from './Loader.style';

export type LoaderProps = {};

export function Loader(_props: LoaderProps) {
    return (
        <Container className='Loader-container' data-testid='Loader-container'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Container>
    );
}

export default Loader;
