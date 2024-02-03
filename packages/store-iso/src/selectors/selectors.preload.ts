import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import * as base from './selectors.base';
import { get } from 'lodash';

type AssetUrl = {
  rootUrl: string;
  fileName: string;
  url: string;
};

export const $glbs = createSelector(base.$elements, (elements) => {
  const { sceneExternals, sceneCharacters } = elements;

  const urls: string[] = [];

  const externalsAndCharacters = [
    ...Object.values(sceneExternals),
    ...Object.values(sceneCharacters),
  ];

  Object.values(externalsAndCharacters).forEach((external) => {
    const { rootUrl, fileName, url } = external;

    if (url) {
      urls.push(url);
    } else if (rootUrl && fileName) {
      urls.push(`${rootUrl}/${fileName}`);
    }
  });

  return urls;
});

export const $videos = createSelector(base.$elements, (elements) => {
  const { sceneMeshes } = elements;

  const urls: string[] = [];

  Object.values(sceneMeshes)
    .filter((mesh) => get(mesh, 'material.type') === 'video')
    .forEach((mesh) => {
      const url = get(mesh, 'material.values.url');

      if (url) {
        urls.push(url);
      }
    });

  return urls;
});

export const $assets = createSelector($glbs, $videos, (glbs, videos) => {
  return [...glbs, ...videos];
});

export const $assetLoader = createSelector(
  raw.$rawSceneAssetLoader,
  raw.$rawSceneStage,
  (assetLoader, sceneStage) => {
    const { fileSizes, completedBytes } = assetLoader;

    const bytesCompleted = Object.values(completedBytes).reduce((acc, val) => acc + val, 0);
    const bytesTotal = Object.values(fileSizes).reduce((acc, val) => acc + val, 0);
    const percent = bytesTotal ? (bytesCompleted / bytesTotal) * 100 : 0;

    return {
      ...assetLoader,
      bytesCompleted,
      bytesTotal,
      percent,
      stage: sceneStage,
    };
  }
);
