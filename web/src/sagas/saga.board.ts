import { ga } from '@gdi/firebase';
import { IBoard, actions, selectors } from '@gdi/store-base';
import { BoardIntro, EditorSchema, LinkList, prompt, toast } from '@gdi/ui';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { Json } from '../types';
import { boardAdapter, flowAdapter } from '../utils/globals';
import { l } from '../utils/logs';
import { guestGuard } from './saga.gdi';

type Verb =
  | 'openBoardDefinition'
  | 'loadFromUrl'
  | 'loadBoard'
  | 'showPlaybacks'
  | 'startReview'
  | 'showIntroModal';

type Action = {
  type: 'BOARD';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  openBoardDefinition: openBoardDefinition,
  loadFromUrl: loadBoardFromUrl,
  loadBoard: loadBoard,
  showPlaybacks: showPlaybacks,
  showIntroModal: showIntroModal,
  startReview: startReview,
};

export function* openBoardDefinition(_action: Action, board: IBoard) {
  l({ message: 'Open Board Definition', verb: 'configure', data: board });

  prompt.custom({
    title: 'Board Definition',
    component: EditorSchema,
    componentProps: {
      value: JSON.stringify(board, null, 2),
      width: 800,
      height: 500,
      actions: ['content_copy', 'download'],
      downloadFileName: `board-${board.id}.json`,
      schemaId: 'IBoard',
    },
  });
}

export function* loadBoardFromUrl(_action: Action, _board: IBoard) {
  l({ message: 'Open Load board from URL dialog', verb: 'board' });

  const { value, didCancel } = yield prompt.input({
    title: 'Load Board from URL',
    placeholder: 'https://...',
    ctaButtonText: 'Load Board',
  });

  if (didCancel || !value) {
    return;
  }

  l({ message: `Loading board from "${value}"`, verb: 'board' });
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

export function* loadBoard(action: Action, _board: IBoard) {
  const { id } = action;

  const hash = location.hash.replace('#', '');
  const [setupId = '', playbackId = ''] = hash.split('|');
  yield put(actions.currentIds.patch({setupId, playbackId })); // prettier-ignore
  yield put(actions.appState.patch({prompt: '', promptOriginal: '',promptRevised: '' })); // prettier-ignore

  const board = yield* call(boardAdapter.loadBoard, {
    boardId: id,
    setupId,
    playbackId,
  });

  if (board.flow) {
    const response: any = yield* call(flowAdapter.loadFlow, board.flow);

    if (!response.success) {
      toast.show("Error loading board's flow", 'error');
    }
  }

  const settings = yield* select(selectors.raw.$rawSettings);

  if (!settings.skipBoardIntro) {
    yield call(showIntroModal, action, board);
  }

  invokeEvent('board/loaded');
}

export function* startReview(_action: Action, board: IBoard) {
  const shouldContinue = yield* call(guestGuard);

  if (!shouldContinue) {
    return;
  }

  yield put({ type: 'NAVIGATE', to: '/newReview' });
}

export function* showIntroModal(_action: Action, board: IBoard) {
  const { id, boardInfo } = board;

  const appState = yield* select(selectors.raw.$rawAppState);
  const { assetsRootUrl } = appState;

  l({ message: 'Showing board intro dialog', verb: 'bootstrap' });

  const { didCancel } = yield prompt.custom({
    title: 'AI Board Intro',
    component: BoardIntro,
    componentProps: {
      boardId: id,
      boardInfo,
      assetsRootUrl,
    },
  });

  if (didCancel) {
    return;
  }

  yield put({ type: 'PLAY' });
}

export function* board(action: Action) {
  const { verb, id } = action;

  const saga = map[verb];

  const boards = yield* select(selectors.raw.$rawBoards);
  const board = (boards ?? {})[id];

  if (!saga) {
    return;
  }

  ga(`board.${verb}`, { boardId: id });

  yield* fork(saga, action, board);
}

export function* root() {
  yield delay(0);

  yield takeEvery('BOARD', board);
}

export const saga = {
  id: 'gdi.board',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['BOARD'],
  },
};
