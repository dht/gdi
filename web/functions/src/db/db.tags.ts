import { getCollection, patchItem } from '../utils/firebase';
import { getScopedPath } from './db._base';

export const getTags = async (req: any) => {
  const scopedPath = getScopedPath(req, '/myTags', 'userData');
  return getCollection(scopedPath);
};

export const createTag = async (req: any, tagValue: string) => {
  const id = tagValue;

  const tag = {
    id,
    isProjectTag: id.startsWith('project-'),
    tsAdded: Date.now(),
    isActive: true,
  };

  const scopedPath = getScopedPath(req, `/myTags/${id}`, 'userData');

  await patchItem(scopedPath, tag);

  return tag;
};

export const all = {
  tags: {
    get: getTags,
    create: createTag,
  },
};
