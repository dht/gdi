import { IMesh } from '../../store-iso/dist/dts';
import { scene } from './globals';
import { addMesh } from './iso.meshes.add';
import { getMesh, moveMesh } from './iso.utils';

const speakingStone: IMesh = {
  id: 'speaking-stone',
  type: 'torus',
  values: {
    diameter: 0.7,
    thickness: 0.7,
  },
  position: [0, -10, 0],
  rotation: [-0.2, 0, 0],
  material: {
    type: 'color',
    colors: {
      diffuse: [0.0, 0.0, 0.0],
      specular: [0, 0, 0],
      emissive: [0 / 255, 179 / 255, 20 / 255],
    },
    alpha: 0.2,
  },
};

export const changeMouth = (characterId: string, mouthShapeId: string) => {
  if (!scene.spriteManagers) {
    return;
  }

  const sm = scene.spriteManagers.find((sm: any) => sm.name === characterId);

  if (sm && sm.sprites.length > 0) {
    sm.sprites[0].cellRef = mouthShapeId + '.svg';
  }
};

export const moveSpeakingStone = (characterId: string) => {
  if (!scene.spriteManagers) {
    return;
  }

  const sm = scene.spriteManagers.find((sm: any) => sm.name === characterId);

  if (sm && sm.sprites.length > 0) {
    const { x, z } = sm.sprites[0].position;
    moveMesh(speakingStone.id, [x + 0.3, 0.1, z + 0.3]);
  }
};

export const createSpeakingStone = () => {
  let mesh = getMesh(speakingStone.id);

  if (mesh) {
    return;
  }

  mesh = addMesh(speakingStone);
};
