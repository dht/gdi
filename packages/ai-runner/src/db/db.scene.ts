import { guid8 } from 'shared-base';
import { saveToBucket } from '../api/files';
import { fetchJsonUrl } from '../utils/download';
import { tsShort } from '../utils/time';
import { getByNodes, getScopedPath } from './db._base';
import { createAsset, getAssets, patchAsset } from './db.assets';
import { dbAdapter } from '../utils/globals';

export const getScene = async (req: any) => {
  const scene = await getByNodes(req, ['sceneLights', 'sceneMeshes', 'sceneExternals']);

  return scene;
};

export const getSceneAsset = async (req: any, projectId: string) => {
  const assets = await getAssets(req);

  const scene = assets.find(
    (asset: any) => asset.contentType === 'scene' && asset.tags.includes(projectId)
  );

  return scene;
};

export const createSceneAsset = async (req: any, id: string, url: string, tags: string[] = []) => {
  const asset = await createAsset(req, {
    id,
    fileName: 'scene-default.json',
    filePath: `/scenes/${id}.json`,
    assetUrl: url,
    contentType: 'scene',
    tsAdded: tsShort(),
    tags,
  });

  return asset;
};

export const saveOrCreateSceneAsset = async (req: any, projectId: string) => {
  const tags = [projectId];
  const scene = await getScene(req);
  const json = JSON.stringify(scene, null, 2);
  let asset = await getSceneAsset(req, projectId);

  const id = asset ? asset.id : guid8();
  const filePath = `/scenes/${id}.json`;

  const meta = {
    source: 'saved',
  };

  if (!asset) {
    const url = await saveToBucket(req, filePath, json, 'application/json', meta, true);
    asset = await createSceneAsset(req, id, url, tags);
  } else {
    const url = await saveToBucket(req, filePath, json, 'application/json', meta);

    await patchAsset(req, id, {
      assetUrl: url,
      filePath,
      tsModified: tsShort(),
    });
  }

  return asset;
};

export const restoreScene = async (req: any, projectId: string) => {
  let success = true;

  let asset = await getSceneAsset(req, projectId);

  if (!asset) {
    return { success };
  }

  try {
    const url = asset.assetUrl;

    const response = await fetchJsonUrl(url);

    const { sceneLights, sceneMeshes, sceneExternals } = response.data;

    let scopedPath: string;

    scopedPath = getScopedPath(req, '/sceneLights', 'userData');
    await dbAdapter.replaceCollection(scopedPath, sceneLights);
    scopedPath = getScopedPath(req, '/sceneMeshes', 'userData');
    await dbAdapter.replaceCollection(scopedPath, sceneMeshes);
    scopedPath = getScopedPath(req, '/sceneExternals', 'userData');
    await dbAdapter.replaceCollection(scopedPath, sceneExternals);
  } catch (err) {
    console.log('err =>', err);
    success = false;
  }

  return {
    success,
  };
};

export const all = {
  scene: {
    get: getScene,
    getAsset: getSceneAsset,
    createAsset: createSceneAsset,
    saveOrCreateAsset: saveOrCreateSceneAsset,
    restore: restoreScene,
  },
};
