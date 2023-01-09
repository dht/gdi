import React, { useEffect } from 'react';
import { HudWrapper, Wrapper } from './ModelViewer.style';
import { BabylonScene, startRender, loadBoard, animateCamera } from 'isokit';
import { invokeEvent } from 'shared-base';
import { board } from './ModelViewer.board';
import { Hud } from '../Hud/Hud';
import { config, items, timeline } from '../Hud/Hud.config';
import { useCameraPosition } from '../Hud/hooks/useCameraPosition';

export type ModelViewerProps = {};

export function ModelViewer(_props: ModelViewerProps) {
    const cameraPosition = useCameraPosition(timeline, {
        radius: 7,
        alpha: 0,
        beta: 1.5,
    });

    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        invokeEvent('load_babylonjs_scene', () => {
            loadBoard(board);
            startRender();
            setIsLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        animateCamera(cameraPosition);
    }, [cameraPosition, isLoaded]);

    return (
        <Wrapper
            className='ModelViewer-wrapper'
            data-testid='ModelViewer-wrapper'
        >
            <BabylonScene />
            <HudWrapper>
                <Hud config={config} items={items} timeline={timeline} />
            </HudWrapper>
        </Wrapper>
    );
}

export default ModelViewer;
