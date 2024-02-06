import { Mesh, VertexData } from '@babylonjs/core';
import { scene } from './globals';
import { initMaterialGaussian } from './iso.material.gaussian';
import { showMesh } from './iso.meshes.utils';

export const initQuad = () => {
  let quad = new Mesh('custom', scene);
  var vertexData = new VertexData();
  vertexData.positions = [-2, -2, 0, 2, -2, 0, 2, 2, 0, -2, 2, 0];
  vertexData.indices = [0, 1, 2, 0, 2, 3];

  const engine = scene.getEngine();

  vertexData.applyToMesh(quad);

  const shaderMaterial = initMaterialGaussian({} as any);
  quad.material = shaderMaterial;

  quad.alwaysSelectAsActiveMesh = true;
  quad.onBeforeDrawObservable.add((_) => {
    engine._alphaState.setAlphaBlendFunctionParameters(
      engine._gl.ONE_MINUS_DST_ALPHA,
      engine._gl.ONE,
      engine._gl.ONE_MINUS_DST_ALPHA,
      engine._gl.ONE
    );
    engine._alphaState.setAlphaEquationParameters(engine._gl.FUNC_ADD, engine._gl.FUNC_ADD);
    engine.setDepthWrite(false);
  });

  return quad;
};
