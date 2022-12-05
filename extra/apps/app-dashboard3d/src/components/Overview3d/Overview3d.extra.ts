// import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';
import { addStructure as addDome } from './structures/structure.dome-2';
import 'babylonjs-loaders';

export const onSceneReady = (scene: BABYLON.Scene, palette: string[]) => {
    addDome(scene, palette);
};
