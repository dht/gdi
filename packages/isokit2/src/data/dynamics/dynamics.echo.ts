import { NodeMaterial, SceneLoader } from '@babylonjs/core';
import { ISceneDynamic } from '@gdi/store-iso';
import { scene } from '../../globals';

export async function addDynamics(dynamic: ISceneDynamic[]) {
  let size = 5 * 6;

  await SceneLoader.AppendAsync(
    '',
    'https://raw.githubusercontent.com/dht/gdi-assets/main/boards/assets/main-big.glb'
  );

  const root: any = scene.getNodeByName('__root__');

  NodeMaterial.ParseFromSnippetAsync('DGI98T', scene).then((proceduralNodes: any) => {
    proceduralNodes.name = 'proceduralTexture';
    const proceduralTex: any = proceduralNodes.createProceduralTexture(512);
    proceduralTex.name = 'circlesTex';
    NodeMaterial.ParseFromSnippetAsync('UE2KBX#4', scene).then((nodeMaterial) => {
      nodeMaterial.name = 'hologramMat';
      nodeMaterial.alphaMode = 1;
      nodeMaterial.alpha = 0.9999;
      const block: any = nodeMaterial.getBlockByName('proceduralTex');
      block.texture = proceduralTex;
      for (let child of root.getChildMeshes()) {
        child.material = nodeMaterial;
      }
    });
  });
}
