import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import * as base from './selectors.base';
import { sortBy } from 'shared-base';
import { up, rootList } from '../data/data.assets';
import { IAsset, Json } from '../types';

const iconMap: any = {
  folder: 'folder',
  image: 'photo',
  audio: 'headphones',
  txt: 'description',
  json: 'data_object',
  scene: 'data_object',
  '3d': 'deployed_code',
};

export const $tagsProjects = createSelector(raw.$rawTags, (tags) => {
  return Object.values(tags).filter((tag) => tag.isProjectTag);
});

export const $tagsTags = createSelector(raw.$rawTags, (tags) => {
  return Object.values(tags).filter((tag) => !tag.isProjectTag);
});

export const $projectsList = createSelector($tagsProjects, (tags) => {
  const output: IAsset[] = [{ ...up }];

  tags.forEach((tag) => {
    const { id, tsAdded } = tag;
    output.push({
      id,
      fileName: id,
      assetUrl: '',
      contentType: 'folder',
      iconName: 'folder',
      tags: [],
      tsAdded,
    });
  });

  return output;
});

export const $tagsList = createSelector($tagsTags, (tags) => {
  const output: IAsset[] = [{ ...up }];

  tags.forEach((tag) => {
    const { id, tsAdded } = tag;

    output.push({
      id,
      fileName: id,
      assetUrl: '',
      contentType: 'folder',
      iconName: 'folder',
      tags: [],
      tsAdded,
    });
  });

  return output;
});

export const $assets = createSelector(raw.$rawAssets, base.$projectTag, (assets, project) => {
  return Object.values(assets)
    .map((asset) => {
      const { contentType, fileName, tags = [] } = asset;

      const fixedTags: string[] = Array.isArray(tags) ? tags : Object.values(tags);

      const iconName = iconMap[contentType] ?? 'folder';
      const projectTags = fixedTags.filter((tag) => tag.startsWith('project-'));
      const isCurrentProject = projectTags.includes(project ?? '');

      return {
        ...asset,
        name: fileName,
        iconName,
        tags: fixedTags,
        isUnassigned: projectTags.length === 0,
        isCurrentProject,
      };
    })
    .sort(sortBy('fileName'));
});

export const $assetsCurrent = createSelector($assets, (assets) => {
  return assets.filter((asset) => asset.isCurrentProject);
});

export const $listLeft = createSelector(
  raw.$rawCurrentIds,
  $projectsList,
  $tagsList,
  $assets,
  (currentIds, projectsList, tagsList, assets) => {
    const { leftId } = currentIds;

    let relevantAssets;

    switch (leftId) {
      case '':
        return rootList;
      case '$unassigned':
        relevantAssets = assets.filter((asset) => asset.isUnassigned);
        return [{ ...up }, ...relevantAssets];
      case '$projects':
        return projectsList;
      case '$tags':
        return tagsList;
      default:
        relevantAssets = assets.filter((asset) => asset.tags.includes(leftId));
        return [{ ...up }, ...relevantAssets];
    }
  }
);

export const $listRight = createSelector(
  raw.$rawCurrentIds,
  $projectsList,
  $tagsList,
  $assets,
  (currentIds, projectsList, tagsList, assets) => {
    const { rightId } = currentIds;

    let relevantAssets;

    switch (rightId) {
      case '':
        return rootList;
      case '$unassigned':
        relevantAssets = assets.filter((asset) => asset.isUnassigned);
        return [{ ...up }, ...relevantAssets];
      case '$projects':
        return projectsList;
      case '$tags':
        return tagsList;
      default:
        relevantAssets = assets.filter((asset) => asset.tags.includes(rightId));
        return [{ ...up }, ...relevantAssets];
    }
  }
);

export const $byList = createSelector($listLeft, $listRight, (left, right) => {
  return {
    left,
    right,
  };
});
