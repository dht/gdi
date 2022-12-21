import { SpritePackedManager } from '@babylonjs/core';
import { packs, scene, logTime, logTimeEnd } from './isokit.globals';

export const initPack = (item: IStudioPack) => {
    const { identifier, capacity, url } = item;

    logTime(`initPack ${identifier}`, 3);

    packs[identifier] = new SpritePackedManager(
        identifier,
        url,
        capacity,
        scene
    );

    logTimeEnd(`initPack ${identifier}`);
};

export const initPacks = async (externals: IStudioPacks) => {
    logTime('initPacks');

    for (let pack of Object.values(externals)) {
        const { identifier } = pack;
        logTime(`initPack ${identifier}`);
        await initPack(pack);
        logTimeEnd(`initPack ${identifier}`);
    }

    logTimeEnd('initPacks');
};
