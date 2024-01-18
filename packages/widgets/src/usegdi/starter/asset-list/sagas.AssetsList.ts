import { IAsset, actions, selectors } from '@gdi/store-base';
import { Json } from 'redux-store-generator';
import { delay, fork, put, select, takeEvery, takeLatest } from 'saga-ts';
import { findUp } from '../asset-list/AssetList.utils';
import { CommanderState, mapFunctions } from './sagas.AssetsFunctions';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';

type Verb =
  | 'drillDown' //
  | 'drillUp'
  | 'closeViewer'
  | 'switchPanel'
  | 'preview'
  | 'functionKey'
  | 'bootstrap';

type Action = {
  type: 'ASSET_LIST';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  drillDown: drillDown,
  drillUp: drillUp,
  preview: preview,
  closeViewer: closeViewer,
  switchPanel: switchPanel,
  functionKey: functionKey,
  bootstrap: bootstrap,
};

export function* functionKey(action: Action, _asset: IAsset) {
  const { payload, id: listId } = action;
  const { key, asset, ev } = payload;

  const saga = mapFunctions[key];

  if (!saga) {
    return;
  }

  const appState = yield* select(selectors.raw.$rawAppState);
  const currentIds = yield* select(selectors.raw.$rawCurrentIds);
  const { flavour, isFocusLeft } = appState;
  const { leftId, rightId } = currentIds;

  const root = isFocusLeft ? leftId : rightId;
  const rootOther = isFocusLeft ? rightId : leftId;

  const commanderState: CommanderState = {
    listId,
    root,
    rootOther,
    rootLeft: leftId,
    rootRight: rightId,
    flavour,
    isFocusLeft,
  };

  yield* fork(saga, asset, commanderState, ev);
}

export function* drillDown(action: Action, _asset: IAsset) {
  const { payload, id: listId } = action;
  const { asset } = payload;
  const { id } = asset;

  const key = listId === 'left' ? 'leftId' : 'rightId';

  let nextId = id;

  yield put(actions.currentIds.patch({ [key]: nextId }));
}

export function* drillUp(action: Action, _asset: IAsset) {
  const { id: listId } = action;

  const currentIds = yield* select(selectors.raw.$rawCurrentIds);
  const key = listId === 'left' ? 'leftId' : 'rightId';
  const root = (currentIds as any)[key];

  const nextId = findUp(root);

  yield put(actions.currentIds.patch({ [key]: nextId }));
}

export function* preview(action: Action, _asset: IAsset) {
  const { payload } = action;
  const { asset } = payload;
  const { id } = asset;

  yield put(actions.appState.patch({ flavour: 'viewer' }));
  yield put(actions.currentIds.patch({ assetId: id }));
}

export function* closeViewer(_action: Action, _asset: IAsset) {
  yield put(actions.appState.patch({ flavour: 'default' }));
}

export function* switchPanel(_action: Action, _asset: IAsset) {
  const appState = yield* select(selectors.raw.$rawAppState);
  const { isFocusLeft } = appState;

  yield put(actions.appState.patch({ isFocusLeft: !isFocusLeft }));
}

export function* asset(action: any) {
  const { verb } = action;
  yield delay(10);

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const assets = yield* select(selectors.assets.$assets);
  const asset = assets.find((asset) => asset.id === action.id);

  yield* fork(saga, action, asset);
}

export function* bootstrap() {
  const appState = yield* select(selectors.raw.$rawAppState);
  const projectTag = yield* select(selectors.base.$projectTag);

  const { isFocusLeft } = appState;

  if (!projectTag || !isFocusLeft) {
    return;
  }

  yield put(
    actions.currentIds.patch({
      leftId: projectTag,
    })
  );
}

export function* onFocusChange(ev: any) {
  const { data } = ev;
  const { focusedId } = data;

  const appState = yield* select(selectors.raw.$rawAppState);
  const { flavour } = appState;

  if (flavour === 'default' || focusedId === '' || focusedId.includes('$')) {
    return;
  }

  yield put(actions.currentIds.patch({ assetId: focusedId }));
}

export function* root() {
  yield takeLatest('ASSET_LIST', asset);

  const channel = customEvenChannel('list/focusChange');
  yield takeEvery(channel, onFocusChange);

  yield fork(bootstrap);
}

export const saga = {
  id: 'widgets.assetsList',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['ASSET_LIST'],
    eventNames: ['list/focusChange'],
  },
};
