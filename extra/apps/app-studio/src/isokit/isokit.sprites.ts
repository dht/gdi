import * as BABYLON from 'babylonjs';
import { packs, logTime, logTimeEnd } from './isokit.globals';

export const initSprite = (sprite: IStudioSprite) => {
    const { identifier, packId, position, size, isOnGround, isHidden } = sprite;

    if (isHidden) {
        return;
    }

    const pack = packs[packId];
    try {
        const item = new BABYLON.Sprite(identifier, pack);

        const { width, height } = size;

        item.cellRef = identifier;
        item.width = width;
        item.height = height;

        if (isOnGround) {
            position.y = height / 2;
        }

        item.position = position;

        item.invertU = true;
    } catch (error) {
        console.error(error);
    }
};

export const initSprites = async (externals: IStudioSprites) => {
    logTime('initSprites');

    for (let sprite of Object.values(externals)) {
        const { identifier } = sprite;
        logTime(`initSprite ${identifier}`);
        await initSprite(sprite);
        logTimeEnd(`initSprite ${identifier}`);
    }

    logTimeEnd('initSprites');
};
