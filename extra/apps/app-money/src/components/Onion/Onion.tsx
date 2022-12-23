import React, { useEffect } from 'react';
import { Wrapper } from './Onion.style';
import { BabylonScene, startRender, loadTimeline } from 'isokit';
import { invokeEvent } from 'shared-base';

export type OnionProps = {};

export function Onion(_props: OnionProps) {
    useEffect(() => {
        invokeEvent('load_babylonjs_scene', () => {
            loadTimeline({});
            startRender();
        });
    }, []);

    return (
        <Wrapper className='Onion-wrapper' data-testid='Onion-wrapper'>
            <BabylonScene />
        </Wrapper>
    );
}

export default Onion;
