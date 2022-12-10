import React from 'react';
import { Center, Wrapper } from './Loader.style';
import { Loader as LoaderCmp } from '@gdi/engine';

export type LoaderProps = {};

export function Loader(_props: LoaderProps) {
    return (
        <Wrapper className='Loader-wrapper' data-testid='Loader-wrapper'>
            <Center>
                <LoaderCmp />
            </Center>
        </Wrapper>
    );
}

export default Loader;
