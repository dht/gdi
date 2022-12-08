// import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';

import { addStructure as addDome1 } from './structures/structure.dome-1';
import 'babylonjs-loaders';

export const onSceneReady = (scene: BABYLON.Scene, palette: string[]) => {
    addDome1(scene as any, palette);
};
