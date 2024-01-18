import { ga } from '@gdi/firebase';
import { IBoard, actions, selectors } from '@gdi/store-base';
import { LinkList, ScreenInfo, prompt } from '@gdi/ui';
import { Json } from 'redux-store-generator';
import { call, fork, put, select, takeEvery } from 'saga-ts';
import { invokeEvent, patchJson } from 'shared-base';
import { l } from '../utils/logs';
import { showTagPicker } from './saga.tags';

const LOCALE_STORAGE_KEY = 'locale';

type Verb =
  | 'setups' //
  | 'boardId'
  | 'adapter'
  | 'resolution'
  | 'time'
  | 'tags'
  | 'commandPalette';

type Action = {
  type: 'BAR';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  setups: showPlaybacks,
  adapter: configureFlowAdapter,
  resolution: showScreenInfo,
  time: toggleTimeFormat,
  tags: showTagPicker,
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

export function* showPlaybacks(_action: Action, board: IBoard) {
  const list = yield* select(selectors.base.$setupsAndPlaybacksList);

  l({ message: 'Showing setups and sibling boards', verb: 'board', data: list });

  const { value, didCancel } = yield* call(prompt.custom, {
    title: 'Playbacks',
    component: LinkList,
    componentProps: {
      links: list.links,
      tabs: list.tabs,
    },
  });

  if (didCancel || !value || !value.url) {
    return;
  }

  invokeEvent('nav', { path: value.url });
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
