import React, { useRef } from 'react';
import { Engine, Scene } from 'babylonjs';
import { setScene, setEngine } from './isokit.globals';
import { useCustomEvent } from '@gdi/hooks';
import { useUnmount } from 'react-use';
import styled from 'styled-components';

export const BabylonScene = (props: any) => {
    const canvas = useRef(null);
    const engine = useRef<any>();
    const scene = useRef<any>();

    useCustomEvent(
        'load_babylonjs_scene',
        (callback: any) => {
            if (!canvas.current) {
                return;
            }

            if (engine.current) {
                engine.current.dispose();
            }

            engine.current = new Engine(canvas.current);
            setEngine(engine.current);

            if (scene.current) {
                scene.current.dispose();
            }

            scene.current = new Scene(engine.current, {});

            setScene(scene.current);

            if (scene.current.isReady()) {
                callback();
            } else {
                scene.current.onReadyObservable.addOnce(() => {
                    callback();
                });
            }

            return () => {
                scene.current.getEngine().dispose();
            };
        },
        []
    );

    useUnmount(() => {
        if (scene.current) {
            scene.current.getEngine().dispose();
        }
    });

    return <Canvas ref={canvas} />;
};

export const Canvas = styled.canvas`
    outline: none;
`;
