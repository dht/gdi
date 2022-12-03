import React, { RefObject, useRef } from 'react';
import { Wrapper } from './Babylon.style';
import { onSceneReady } from './Babylon.extra';
import { BabylonScene } from './Scene';

export type BabylonProps = {
    init: (ref: RefObject<HTMLCanvasElement>) => void;
};

export function Babylon(props: BabylonProps) {
    return (
        <Wrapper className='Babylon-wrapper' data-testid='Babylon-wrapper'>
            <BabylonScene onSceneReady={onSceneReady} />
        </Wrapper>
    );
}

export default Babylon;
