import { guid8 } from 'shared-base';
import { saveToBucket } from '../api/files';
import { fetchJsonUrl } from '../utils/download';
import { tsShort } from '../utils/time';
import { getByNodes, getScopedPath } from './db._base';
import { createAsset, getAssets, patchAsset } from './db.assets';
import { initialAudios, initialBits } from '../data/data.clip';
import { dbAdapter } from '../utils/globals';

export const getClip = async (req: any) => {
  const scene = await getByNodes(req, ['sceneBits', 'sceneDots', 'sceneAudios', 'sceneEffects']);

  return scene;
};

export const getClipAsset = async (req: any) => {
  const assets = await getAssets(req);

  const scene = assets.find((asset: any) => asset.contentType === 'clip');

  return scene;
};

export const createClipAsset = async (
  req: any,
  id: string,
  url: string,
  tags: string[] = [],
  project: string
) => {
  const asset = await createAsset(req, {
    id,
    fileName: 'clip-default.json',
    filePath: `/clips/${id}.json`,
    assetUrl: url,
    contentType: 'clip',
    tsAdded: tsShort(),
    tags,
    project,
  });

  return asset;
};

export const saveOrCreateSceneAsset = async (req: any, projectId: string) => {
  const tags: string[] = [];
  const scene = await getClip(req);
  const json = JSON.stringify(scene, null, 2);
  let asset = await getClipAsset(req);

  const id = asset ? asset.id : guid8();
  const filePath = `/clips/${id}.json`;

  const meta = {
    source: 'saved',
  };

  if (!asset) {
    const url = await saveToBucket(req, filePath, json, 'application/json', meta);
    asset = await createClipAsset(req, id, url, tags, projectId);
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

export const restoreClip = async (req: any, projectId: string) => {
  let success = true;

  let asset = await getClipAsset(req);

  if (!asset) {
    await bootstrapClip(req, projectId);
    return { success };
  }

  try {
    const url = asset.assetUrl;
    const response = await fetchJsonUrl(url);

    const { sceneBits, sceneDots, sceneAudios, sceneEffects } = response.data;

    let scopedPath: string;

    scopedPath = getScopedPath(req, '/sceneBits', 'userData');
    await dbAdapter.replaceCollection(scopedPath, sceneBits);
    scopedPath = getScopedPath(req, '/sceneDots', 'userData');
    await dbAdapter.replaceCollection(scopedPath, sceneDots);
    scopedPath = getScopedPath(req, '/sceneAudios', 'userData');
    await dbAdapter.replaceCollection(scopedPath, sceneAudios);
    scopedPath = getScopedPath(req, '/sceneEffects', 'userData');
    await dbAdapter.replaceCollection(scopedPath, sceneEffects);

    await bootstrapClip(req, projectId);
  } catch (err) {
    console.log('err =>', err);
    success = false;
  }

  return {
    success,
  };
};

// make sure the bare-minimum for clip to function exists
export const bootstrapClip = async (req: any, _projectId: string) => {
  let scopedPath: string, data;

  scopedPath = getScopedPath(req, '/sceneBits', 'userData');
  data = await dbAdapter.getCollection(scopedPath);

  if (data.length === 0) {
    await dbAdapter.replaceCollection(scopedPath, initialBits);
  }

  scopedPath = getScopedPath(req, '/sceneAudios', 'userData');
  data = await dbAdapter.getCollection(scopedPath);

  if (data.length === 0) {
    await dbAdapter.replaceCollection(scopedPath, initialAudios);
  }
};

export const all = {
  clip: {
    get: getClip,
    getAsset: getClipAsset,
    createAsset: createClipAsset,
    saveOrCreateAsset: saveOrCreateSceneAsset,
    restore: restoreClip,
  },
};
