import { NodeMaterial, SceneLoader } from '@babylonjs/core';
import { ISceneDynamic } from '@gdi/store-iso';
import { scene } from '../../globals';

export async function addDynamics(dynamic: ISceneDynamic[]) {
  let size = 5 * 6;

  await SceneLoader.AppendAsync(
    '',
    'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/main-big.glb'
  );

  const root = scene.getNodeByName('__root__');

  NodeMaterial.ParseFromSnippetAsync('DGI98T', scene).then((proceduralNodes) => {
    proceduralNodes.name = 'proceduralTexture';
    const proceduralTex: any = proceduralNodes.createProceduralTexture(512);
    proceduralTex.name = 'circlesTex';
    NodeMaterial.ParseFromSnippetAsync('UE2KBX#4', scene).then((nodeMaterial) => {
      nodeMaterial.name = 'hologramMat';
      nodeMaterial.alphaMode = 1;
      nodeMaterial.alpha = 0.9999;
      nodeMaterial.getBlockByName('proceduralTex').texture = proceduralTex;
      for (let child of root.getChildMeshes()) {
        child.material = nodeMaterial;
      }
      customMesh.material = nodeMaterial;
      sphere.material = nodeMaterial;
    });
  });
}
