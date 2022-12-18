import * as BABYLON from 'babylonjs';
import { logTime, logTimeEnd, scene } from './isokit.globals';

export const loadExternal = (external: IStudioExternal) => {
    return new Promise((resolve, reject) => {
        const { url } = external;

        BABYLON.SceneLoader.ShowLoadingScreen = false;
        BABYLON.SceneLoader.Append('/', url, scene, () => {
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
