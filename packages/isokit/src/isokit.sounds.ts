import { sounds, logTime, logTimeEnd } from './isokit.globals';

export const initSound = (item: IStudioSound) => {
    const { identifier, url } = item;

    logTime(`initSound ${identifier}`);

    if (sounds[identifier]) {
        return;
    }

    sounds[identifier] = new Audio(url);

    logTimeEnd(`initSound ${identifier}`);
};

export const initSounds = async (externals: IStudioSounds) => {
    logTime('initSounds');

    for (let sound of Object.values(externals)) {
        const { identifier } = sound;

        logTime(`initSound ${identifier}`);
        await initSound(sound);
        logTimeEnd(`initSound ${identifier}`);
    }

    logTimeEnd('initSounds');
};
