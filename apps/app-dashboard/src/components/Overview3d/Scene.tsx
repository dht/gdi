import React, { useEffect, useRef } from 'react';
import { Engine, Scene } from '@babylonjs/core';

export const BabylonScene = (props: any) => {
    const {
        antialias,
        engineOptions,
        adaptToDeviceRatio,
        sceneOptions,
        onRender,
        onSceneReady,
        ...rest
    } = props;

    const reactCanvas = useRef(null);

    // set up basic engine and scene
    useEffect(() => {
        const { current: canvas } = reactCanvas;
        let assets;

        if (!canvas) return;

        const engine = new Engine(
            canvas,
            antialias,
            engineOptions,
            adaptToDeviceRatio
        );
        const scene = new Scene(engine, sceneOptions);

        if (scene.isReady()) {
            assets = onSceneReady(scene);
        } else {
            scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
        }

        engine.runRenderLoop(() => {
            if (typeof onRender === 'function') onRender(scene);
            scene.render();
            // assets.sphere.rotation.y += 0.003;
            // assets.knot.rotation.y -= 0.003;
        });

        return () => {
            scene.getEngine().dispose();
        };
    }, [
        antialias,
        engineOptions,
        adaptToDeviceRatio,
        sceneOptions,
        onRender,
        onSceneReady,
    ]);

    return <canvas style={{ outline: 'none' }} ref={reactCanvas} {...rest} />;
};
