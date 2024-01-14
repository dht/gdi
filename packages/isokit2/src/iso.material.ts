import { StandardMaterial, Texture, VideoTexture } from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials';
import { IMaterial, MaterialType } from '@gdi/store-iso';
import { scene } from './globals';
import { color3 } from './iso.utils';

export const initMaterialColor = (material: IMaterial) => {
  const { id, colors, alpha = 1, backFaceCulling } = material;

  const { ambient, specular, diffuse, emissive } = colors ?? {};

  const output = new StandardMaterial(id!, scene as any);

  if (ambient)  { output.ambientColor = color3(ambient) } // prettier-ignore
  if (specular) { output.ambientColor = color3(specular) } // prettier-ignore
  if (diffuse)  { output.diffuseColor = color3(diffuse) } // prettier-ignore
  if (emissive) { output.emissiveColor = color3(emissive) } // prettier-ignore

  // opacity
  output.alpha = alpha;

  output.backFaceCulling = backFaceCulling ?? false;

  return output;
};

export const initMaterialTexture = (material: IMaterial) => {
  const { values } = material;
  const { textureUrl, uScale, vScale } = values ?? {};
  const output = initMaterialColor(material);

  const diffuseTexture = new Texture(textureUrl, scene);
  diffuseTexture.uScale = uScale;
  diffuseTexture.vScale = vScale;

  output.diffuseTexture = diffuseTexture;

  diffuseTexture.onLoadObservable.addOnce(() => {
    // prevents flickering
  });

  return output;
};

export const initMaterialVideo = (material: IMaterial) => {
  const { id, values } = material;
  const { url } = values ?? {};

  const output = initMaterialColor(material);
  const textureId = `texture-${id}`;
  const vidTexture = new VideoTexture(textureId, url, scene);

  output.diffuseTexture = vidTexture;
  return output;
};

export const initMaterialGrid = (material: IMaterial) => {
  const { id, values, alpha = 1 } = material;

  const output = new GridMaterial(id!, scene);

  for (let key in values) {
    if (key in output) {
      const value = values[key];
      (output as any)[key] = key.includes('Color') ? color3(value) : value;
    }
  }

  output.opacity = alpha;

  return output;
};

export const initMaterial = (material: IMaterial) => {
  const method = map[material.type];

  if (!method) {
    throw new Error(`Material type '${material.type}' not supported.`);
  }

  return method(material);
};

export const map: Record<MaterialType, any> = {
  color: initMaterialColor,
  texture: initMaterialTexture,
  grid: initMaterialGrid,
  video: initMaterialVideo,
};
