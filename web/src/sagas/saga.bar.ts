import { IBoard, actions, selectors } from '@gdi/store-base';
import { LinkList, ScreenInfo, ga, prompt } from '@gdi/ui';
import { Json } from 'redux-store-generator';
import { call, fork, put, select, takeEvery } from 'saga-ts';
import { invokeEvent, patchJson } from 'shared-base';
import { l } from '../utils/logs';
import { showProjectPicker, showTagPicker } from './saga.tags';

const LOCALE_STORAGE_KEY = 'locale';

type Verb =
  | 'boardId' //
  | 'adapter'
  | 'resolution'
  | 'assets'
  | 'time'
  | 'project'
  | 'tags'
  | 'commandPalette';

type Action = {
  type: 'BAR';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  adapter: configureFlowAdapter,
  resolution: showScreenInfo,
  time: toggleTimeFormat,
  tags: showTagPicker,
  project: showProjectPicker,
  assets: navigateToAssets,
  commandPalette: openCommandPalette,
  boardId: boardId,
};

export function* openCommandPalette(_action: Action, _board: IBoard) {
  invokeEvent('bar/commandPalette');
}

export function* boardId(_action: Action, board: IBoard) {
  const { id } = board;

  yield put({
    type: 'BOARD',
    verb: 'showIntroModal',
    id,
  });
}

export function* configureFlowAdapter(_action: Action, board: IBoard) {
  yield put({
    type: 'HOME',
    verb: 'switchAdapter',
  });
}

export function* navigateToAssets(_action: Action, board: IBoard) {
  yield put({
    type: 'NAVIGATE',
    to: '/assets#assets',
  });
}

export function* showScreenInfo() {
  l({ message: 'Open screen dimension info', verb: 'state' });

  prompt.custom({
    title: 'Screen Info',
    component: ScreenInfo,
    componentProps: {},
  });
}

export function* toggleTimeFormat(action: Action) {
  const appState = yield* select(selectors.raw.$rawAppState);

  let is24Hours = appState.is24Hours;

  const nextValue = !is24Hours;

  l({ message: 'Toggling time format', verb: 'configure', data: { is24Hours: nextValue } });

  yield* put(
    actions.appState.patch({
      is24Hours: nextValue,
    })
  );

  patchJson(LOCALE_STORAGE_KEY, {
    is24Hours: nextValue,
  });
}

export function* bar(action: any) {
  const { verb } = action;

  const saga = (map as any)[verb];

  l({ message: `Bar action "${verb}"`, source: 'bar', data: action });

  if (!saga) {
    return;
  }

  const board = yield* select(selectors.raw.$rawBoard);

  ga(`bar.${verb}`, {});

  yield* fork(saga, action, board);
}

export function* root() {
  yield takeEvery('BAR', bar);
}

export const saga = {
  id: 'gdi.bar',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['BAR'],
  },
};
