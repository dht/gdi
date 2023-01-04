import React, { useEffect } from 'react';
import { Wrapper } from './BusinessWheel.style';
import { BabylonScene, startRender, drawPieChart } from 'isokit';
import { invokeEvent } from 'shared-base';

export type BusinessWheelProps = {};

export function BusinessWheel(_props: BusinessWheelProps) {
    useEffect(() => {
        invokeEvent('load_babylonjs_scene', async (scene: Scene) => {
            console.log('scene ->', scene);

            const controller = drawPieChart('/wheel.glb');

            setTimeout(() => {
                controller.updateData([5, 6, 4, 6, 6, 3, 4, 6]);
            }, 300);

            startRender();
        });
    }, []);

    return (
        <Wrapper
            className='BusinessWheel-wrapper'
            data-testid='BusinessWheel-wrapper'
        >
            <BabylonScene />
        </Wrapper>
    );
}

export default BusinessWheel;
