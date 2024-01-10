import { runFunction } from '@gdi/firebase';
import { IAsset, actions, selectors } from '@gdi/store-base';
import { prompt } from '@gdi/ui';
import { call, fork, put, select } from 'saga-ts';
import { uniq } from 'lodash';

export const mapFunctions: any = {
  F1: goto,
  F2: rename,
  F3: view,
  F5: copy,
  F6: move,
  F7: newFolder,
  F8: remove,
};

export type CommanderState = {
  listId: string;
  rootLeft: string;
  rootRight: string;
  root: string;
  rootOther: string;
  flavour: string;
  isFocusLeft: boolean;
};

export function* goto(_asset: IAsset, commanderState: CommanderState) {
  const projectTag = yield* select(selectors.base.$projectTag);

  const { isFocusLeft } = commanderState;

  if (!projectTag) {
    return;
  }

  const key = isFocusLeft ? 'leftId' : 'rightId';
  yield put(actions.currentIds.patch({ [key]: projectTag }));
}

export function* view(asset: IAsset, commanderState: CommanderState) {
  const { flavour, isFocusLeft } = commanderState;
  const { contentType } = asset;

  if (flavour === 'viewer' || !isFocusLeft || contentType === 'folder') {
    return;
  }

  yield put(actions.appState.patch({ flavour: 'viewer' }));
}

export function* rename(asset: IAsset, commanderState: CommanderState) {
  const { id, fileName, contentType } = asset;

  if (contentType === 'folder') {
    return;
  }

  const { value, didCancel } = yield prompt.input({
    title: 'Rename file',
    placeholder: 'Enter a new name',
    ctaButtonText: 'Rename',
    defaultValue: fileName,
  });

  if (didCancel || !value) {
    return;
  }

  const response = yield* call(
    runFunction,
    `/api/assets/myAssets/${id}`,
    {
      fileName: value,
    },
    'PATCH'
  );

  yield put(
    actions.assets.patch(id, {
      fileName: value,
    })
  );
}

export function* copy(asset: IAsset, commanderState: CommanderState) {
  const { rootOther } = commanderState;
  const { id, contentType, tags = [] } = asset;

  if (contentType === 'folder' || rootOther === '' || rootOther.includes('$')) {
    return;
  }

  const newTag = rootOther;

  if (tags.includes(newTag)) {
    return;
  }

  const response = yield* call(
    runFunction,
    `/api/assets/myAssets/${id}`,
    {
      tags: [...tags, newTag],
    },
    'PATCH'
  );

  yield put(
    actions.assets.patch(id, {
      tags: [...tags, newTag],
    })
  );
}

export function* move(asset: IAsset, commanderState: CommanderState) {
  const { root, rootOther } = commanderState;
  const { id, contentType, tags = [] } = asset;

  let newTags = [...tags];

  if (contentType === 'folder' || rootOther === '' || rootOther.includes('$')) {
    return;
  }

  if (!root.startsWith('$')) {
    newTags = [...tags].filter((tag) => tag !== root);
  }

  const newTag = rootOther;

  if (!tags.includes(newTag)) {
    newTags.push(newTag);
  }

  const response = yield* call(
    runFunction,
    `/api/assets/myAssets/${id}`,
    {
      tags: uniq(newTags),
    },
    'PATCH'
  );

  yield put(
    actions.assets.patch(id, {
      tags: uniq(newTags),
    })
  );
}

export function* createNewTag(isProject: boolean) {
  const title = isProject ? 'New Project' : 'New Tag';

  let { value, didCancel } = yield prompt.input({
    title,
    placeholder: 'Enter a name',
    ctaButtonText: 'Create',
  });

  if (didCancel || !value) {
    return;
  }

  if (isProject) {
    value = 'project-' + value.replace('project-', '');
  }

  const response = yield* call(runFunction, '/api/tags/new', {
    tagValue: value,
  });

  const { tag } = response;

  yield put(actions.tags.set(tag.id, tag));

  return value;
}

export function* newFolder(_asset: IAsset, commanderState: CommanderState) {
  const { root, isFocusLeft } = commanderState;

  if (!['$tags', '$projects'].includes(root)) {
    return;
  }

  const isProject = root === '$projects';
  const value = yield* createNewTag(isProject);
  const key = isFocusLeft ? 'leftId' : 'rightId';
  yield put(actions.currentIds.patch({ [key]: value }));
}

export function* deleteAsset(asset: IAsset) {
  yield put({
    type: 'ASSET',
    verb: 'remove',
    id: asset.id,
  });
}

export function* remove(asset: IAsset, commanderState: CommanderState) {
  const { root } = commanderState;
  const { id, contentType, tags = [] } = asset;

  if (root === '$unassigned') {
    yield* fork(deleteAsset, asset);
    return;
  }

  let newTags = [...tags];

  if (contentType === 'folder') {
    return;
  }

  if (!root.startsWith('$')) {
    newTags = [...tags].filter((tag) => tag !== root);
  }

  const response = yield* call(
    runFunction,
    `/api/assets/myAssets/${id}`,
    {
      tags: uniq(newTags),
    },
    'PATCH'
  );

  yield put(
    actions.assets.patch(id, {
      tags: uniq(newTags),
    })
  );
}
