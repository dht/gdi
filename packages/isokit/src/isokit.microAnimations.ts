import * as BABYLON from 'babylonjs';
import { logTime, logTimeEnd, scene } from './isokit.globals';
import { vector3 } from './isokit.helpers';

export const initMicroAnimation = (item: IStudioMicroAnimation) => {
    const {
        identifier,
        position,
        url,
        capacity = 1,
        cellSize,
        size,
        fromFrame = 0,
        toFrame,
        loop = false,
        delay = 0,
    } = item;

    logTime(`initMicroAnimation ${identifier}`);

    var spriteManager = new BABYLON.SpriteManager(
        identifier,
        url,
        capacity,
        cellSize,
        scene
    );

    const spriteId = `${identifier}-sprite`;
    const mySprite = new BABYLON.Sprite(spriteId, spriteManager);
    mySprite.size = size;

    mySprite.position = vector3(position ?? [0, 0, 0]);

    mySprite.playAnimation(fromFrame, toFrame, loop, delay);

    logTimeEnd(`initMicroAnimation ${identifier}`);
};

export const initMicroAnimations = async (
    externals: IStudioMicroAnimations
) => {
    logTime('initMicroAnimations');

    for (let microAnimation of Object.values(externals)) {
        const { identifier } = microAnimation;
        logTime(`initMicroAnimation ${identifier}`);
        await initMicroAnimation(microAnimation);
        logTimeEnd(`initMicroAnimation ${identifier}`);
    }

    logTimeEnd('initMicroAnimations');
};
