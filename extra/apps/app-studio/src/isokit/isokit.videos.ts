import * as BABYLON from 'babylonjs';
import { logTime, logTimeEnd, scene } from './isokit.globals';
import { color3, vectorRadians } from './isokit.helpers';

type InitMethod = (light: IStudioVideo) => void;

export const initVideoSphere = (item: IStudioVideo) => {
    const { identifier, position, rotation, specularColor, values, url } = item;
    const { diameterX, diameterY, diameterZ } = values;

    const sphere = BABYLON.MeshBuilder.CreateSphere(
        identifier,
        {
            diameterX,
            diameterY,
            diameterZ,
        },
        scene
    );

    const vidPos = new BABYLON.Vector3(position.x, position.y, position.z);

    sphere.position = vidPos;
    const vidMaterial = new BABYLON.StandardMaterial('m', scene);
    vidMaterial.specularColor = color3(specularColor);

    const textureId = `texture-${identifier}`;

    const vidTexture = new BABYLON.VideoTexture(textureId, url, scene);

    vidMaterial.diffuseTexture = vidTexture;
    sphere.material = vidMaterial;

    if (rotation) {
        sphere.rotation = vectorRadians(rotation);
    }
};

export const map: Record<string, InitMethod> = {
    sphere: initVideoSphere,
};

export const initVideo = (item: IStudioVideos) => {
    const { identifier, objectType } = item;

    const initMethod = map[objectType];

    if (initMethod) {
        logTime(`initVideo ${identifier}`);
        initMethod(item);
        logTimeEnd(`initVideo ${identifier}`);
    }
};

export const initVideos = async (externals: IStudioVideos) => {
    logTime('initVideos');

    for (let video of Object.values(externals)) {
        const { identifier } = video;
        logTime(`initVideo ${identifier}`);
        await initVideo(video);
        logTimeEnd(`initVideo ${identifier}`);
    }

    logTimeEnd('initVideos');
};
