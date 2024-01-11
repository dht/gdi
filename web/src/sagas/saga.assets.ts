import { ga, runFunction } from '@gdi/firebase';
import { IAsset, actions, selectors } from '@gdi/store-base';
import { prompt } from '@gdi/ui';
import { AssetPickerContainer } from '@gdi/widgets-starter';
import { get } from 'lodash';
import { Json } from 'redux-store-generator';
import { call, delay, fork, put, select, takeLatest } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { formDefaults, forms } from '../_definitions/forms';
import { uploadFiles } from '../utils/upload';

export const saga = {
  id: 'gdi.assets',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['ASSET'],
  },
};

type Verb =
  | 'new' //
  | 'saveImage'
  | 'saveDocument'
  | 'saveAudio'
  | 'create'
  | 'remove'
  | 'getText';

type Action = {
  type: 'ASSET';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  new: newAsset,
  saveImage: saveImage,
  saveDocument: saveDocument,
  saveAudio: saveAudio,
  create: create,
  remove: remove,
  getText: getText,
};

export function* getText(contentType: string) {
  try {
    const { value, didCancel } = yield prompt.custom({
      title: 'Select an asset',
      component: AssetPickerContainer,
      componentProps: {
        contentType,
      },
    });

    if (didCancel || !value) {
      return;
    }

    return get(value, 'assetUrl');
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.assets.ts',
      method: 'getText',
      saga,
      err,
    });
  }
}

export function* create(action: Action, _asset: IAsset) {
  try {
    const files = action.payload as File[];

    if (files.length === 0) {
      return;
    }

    const appState = yield* select(selectors.raw.$rawAppState);
    const assets = yield* select(selectors.raw.$rawAssets);
    const { tags } = appState;

    const responses = yield* call(uploadFiles, files, {
      tags,
      assets,
    });

    for (let response of responses) {
      const { asset } = response;

      if (!asset) {
        return;
      }

      const { id } = asset;
      yield put(actions.assets.set(id, asset));
    }
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.assets.ts',
      method: 'create',
      saga,
      err,
    });
  }
}

export function* remove(action: Action, asset: IAsset) {
  try {
    const { didCancel } = yield prompt.confirm({
      title: 'Delete Asset',
      description: `Are you sure you want to delete this asset?`,
      ctaButtonText: 'Delete Asset',
    });

    if (didCancel) {
      return;
    }

    const response = yield* call(runFunction, '/api/assets/delete', {
      assetId: asset.id,
    });

    yield put(actions.assets.delete(asset.id));
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.assets.ts',
      method: 'remove',
      saga,
      err,
    });
  }
}

export function* saveImage(action: Action, _asset: IAsset) {
  try {
    const { payload } = action;
    const { fileName } = payload;

    const appState = yield* select(selectors.raw.$rawAppState);
    const { tags, imageUrl } = appState;

    const response = yield* call(runFunction, '/api/assets/new', {
      assetUrl: imageUrl,
      fileName,
      tags,
    });

    const { asset } = response;

    if (!asset) {
      return;
    }

    const { id } = asset;
    yield put(actions.assets.set(id, asset));
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.assets.ts',
      method: 'saveImage',
      saga,
      err,
    });
  }
}

export function* saveAudio(action: Action, _asset: IAsset) {
  try {
    const { payload } = action;
    const { fileName } = payload;

    const appState = yield* select(selectors.raw.$rawAppState);
    const { tags, voiceUrl } = appState;

    const response = yield* call(runFunction, '/api/assets/new', {
      assetUrl: voiceUrl,
      fileName,
      tags,
    });

    const { asset } = response;

    if (!asset) {
      return;
    }

    const { id } = asset;
    yield put(actions.assets.set(id, asset));
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.assets.ts',
      method: 'saveAudio',
      saga,
      err,
    });
  }
}

export function* saveDocument(action: Action, _asset: IAsset) {
  try {
    const { payload } = action;
    const { fileName } = payload;

    const appState = yield* select(selectors.raw.$rawAppState);
    const document = yield* select(selectors.raw.$rawDocument);
    const { content } = document;
    const { tags } = appState;

    const response = yield* call(runFunction, '/api/assets/upload', {
      fileInfo: {
        name: fileName,
        size: content.length,
        type: 'text/plain',
        text: content,
      },
      tags,
    });

    const { asset } = response;

    if (!asset) {
      return;
    }

    const { id } = asset;
    yield put(actions.assets.set(id, asset));
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.assets.ts',
      method: 'saveDocument',
      saga,
      err,
    });
  }
}

export function* newAsset(action: Action, _asset: IAsset) {
  try {
    const { payload } = action;

    const { value, didCancel } = yield prompt.form({
      title: 'New Remote Asset',
      form: {
        config: forms.newAsset,
        data: formDefaults.newAsset,
        allOptions: {},
        allDetails: {},
      },
    });

    if (didCancel) {
      return;
    }

    const { assetUrl, fileName } = value;
    const appState = yield* select(selectors.raw.$rawAppState);
    const { tags } = appState;

    const response = yield* call(runFunction, '/api/assets/new', {
      assetUrl,
      fileName,
      tags,
    });

    const { asset } = response;

    if (!asset) {
      return;
    }

    const { id } = asset;
    yield put(actions.assets.set(id, asset));
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.assets.ts',
      method: 'newAsset',
      saga,
      err,
    });
  }
}

export function* asset(action: any) {
  const { verb, id } = action;
  yield delay(10);

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const assets = yield* select(selectors.assets.$assets);
  const asset = assets.find((asset) => asset.id === id);

  ga(`asset.${verb}`, { assetId: id });

  yield* fork(saga, action, asset);
}

export function* root() {
  yield takeLatest('ASSET', asset);
}
