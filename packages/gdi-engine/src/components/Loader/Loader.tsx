import React from 'react';
import { Wrapper } from './Loader.style';

export type LoaderProps = {};

export function Loader(_props: LoaderProps) {
    return (
        <Wrapper className='Loader-wrapper' data-testid='Loader-wrapper'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Wrapper>
    );
}

export default Loader;
