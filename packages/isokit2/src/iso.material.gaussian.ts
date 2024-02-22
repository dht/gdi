import { Effect, ShaderMaterial, Vector2 } from '@babylonjs/core';
import { scene } from './globals';
import { fragmentShaderSource, vertexShaderSource } from './iso.gaussian.data';
import { IMaterial } from '@gdi/store-iso';

export const initMaterialGaussian = (material: IMaterial) => {
  Effect.ShadersStore['customVertexShader'] = vertexShaderSource;
  Effect.ShadersStore['customFragmentShader'] = fragmentShaderSource;
  const shaderMaterial = new ShaderMaterial(
    'shader',
    scene,
    {
      vertex: 'custom',
      fragment: 'custom',
    },
    {
      attributes: ['position', 'normal', 'uv'],
      uniforms: ['world', 'worldView', 'worldViewProjection', 'view', 'projection'],
    }
  );

  const engine = scene.getEngine();
  shaderMaterial.setVector2('focal', new Vector2(1132, 1132));
  shaderMaterial.setVector2(
    'viewport',
    new Vector2(engine.getRenderWidth(), engine.getRenderHeight())
  );

  shaderMaterial.backFaceCulling = false;
  shaderMaterial.alpha = 0.9999;

  return shaderMaterial;
};
