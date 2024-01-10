import {
  DirectionalLight,
  HemisphericLight,
  Light,
  MeshBuilder,
  PointLight,
  SpotLight,
  StandardMaterial,
} from '@babylonjs/core';
import { ILight, LightType } from '@gdi/store-iso';
import { scene } from './globals';
import { applyMeshListeners, color3, degreesToRadians, vector3 } from './iso.utils';

export const addHemispheric = (light: ILight) => {
  const { id, values, position } = light;
  const { intensity = 1 } = values ?? {};

  const output = new HemisphericLight(id, vector3(position), scene);
  output.intensity = intensity;

  return output;
};

export const addSpotlight = (light: ILight) => {
  const { id, values, position, target = [0, -1, 0], colors } = light;
  const { intensity = 1, angle = 45, exponent = 10 } = values ?? {};
  const { diffuse, specular } = colors ?? {};

  const output = new SpotLight(
    id,
    vector3(position),
    vector3(target),
    degreesToRadians(angle),
    exponent,
    scene
  );

  if (specular) { output.specular = color3(specular) } // prettier-ignore
  if (diffuse)  { output.diffuse = color3(diffuse) } // prettier-ignore

  output.intensity = intensity;

  return output;
};

export const addDirectional = (light: ILight) => {
  const { id, values, target, colors } = light;
  const { intensity = 1 } = values ?? {};
  const { diffuse, specular } = colors ?? {};

  const output = new DirectionalLight(id, vector3(target), scene);

  if (specular) { output.specular = color3(specular) } // prettier-ignore
  if (diffuse)  { output.diffuse = color3(diffuse) } // prettier-ignore

  output.intensity = intensity;

  return output;
};

export const addPoint = (light: ILight) => {
  const { id, values, position, colors } = light;
  const { intensity = 1 } = values ?? {};
  const { diffuse, specular } = colors ?? {};

  const output = new PointLight(id, vector3(position), scene);

  if (specular) { output.specular = color3(specular) } // prettier-ignore
  if (diffuse)  { output.diffuse = color3(diffuse) } // prettier-ignore

  output.intensity = intensity;

  return output;
};

export const addLightBox = (light: ILight, obj: Light) => {
  const { id, values, position = [0, 10, 0], colors } = light;

  // create pyramid
  const box = MeshBuilder.CreateBox(`${id}_light_handler`, { size: 0.5 }, scene);
  box.position = vector3(position);
  box.material = new StandardMaterial(id, scene);

  // attach light to box
  obj.parent = box;
  // hide box
  box.isVisible = false;
  applyMeshListeners(box, 'light');
};

export const addLight = (light: ILight) => {
  const method = map[light.type];

  if (!method) {
    throw new Error(`Light type '${light.type}' not supported.`);
  }

  const { id } = light;

  const existing = scene.lights.find((l) => l.id === id);
  if (existing) {
    existing.dispose();
  }

  const output = method(light);

  addLightBox(light, output);

  return output;
};

let showHandlers = false;

export const toggleLights = () => {
  showHandlers = !showHandlers;

  scene.lights.forEach((light) => {
    const handler = scene.getMeshByName(`${light.id}_light_handler`);

    if (handler) {
      handler.isVisible = showHandlers;
    }
  });
};

export const map: Record<LightType, any> = {
  hemispheric: addHemispheric,
  spotlight: addSpotlight,
  directional: addDirectional,
  point: addPoint,
};
