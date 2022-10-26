import React, { RefObject, useRef } from 'react';
import { Container } from './Babylon.style';
import { onSceneReady } from './Babylon.extra';
import { BabylonScene } from './Scene';

export type BabylonProps = {
    init: (ref: RefObject<HTMLCanvasElement>) => void;
};

export function Babylon(props: BabylonProps) {
    return (
        <Container
            className='Babylon-container'
            data-testid='Babylon-container'
        >
            <BabylonScene onSceneReady={onSceneReady} />
        </Container>
    );
}

export default Babylon;
