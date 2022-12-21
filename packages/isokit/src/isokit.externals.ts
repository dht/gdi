import { SceneLoader } from '@babylonjs/core';
import '@babylonjs/loaders';
import { logTime, logTimeEnd, scene } from './isokit.globals';

export const loadExternal = (external: IStudioExternal) => {
    return new Promise((resolve, reject) => {
        const { url } = external;

        const rootUrl = url.substring(0, url.lastIndexOf('/') + 1) ?? '/';
        const fileName = url.substring(url.lastIndexOf('/') + 1);

        SceneLoader.ShowLoadingScreen = false;
        SceneLoader.Append(rootUrl, fileName, scene, () => {
            resolve(true);
        });
    });
};

export const loadExternals = async (externals: IStudioExternals) => {
    logTime('loadExternals');

    for (let external of Object.values(externals)) {
        const { url } = external;
        logTime(`loadExternal ${url}`);
        await loadExternal(external);
        logTimeEnd(`loadExternal ${url}`);
    }

    logTimeEnd('loadExternals');
};
