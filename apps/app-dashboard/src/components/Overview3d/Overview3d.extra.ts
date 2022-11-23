// import { AdvancedDynamicTexture, Button } from '@babylonjs/gui/2D';

import { addStructure as addDome1 } from './structures/structure.dome-1';
import { addStructure as addDome2 } from './structures/structure.dome-2';
import { addStructure as addDome3 } from './structures/structure.dome-3';
import 'babylonjs-loaders';
import _ from 'lodash';

export const onSceneReady = (scene: BABYLON.Scene, palette: string[]) => {
    addDome1(scene, palette);
    // addDome2(scene);
};
