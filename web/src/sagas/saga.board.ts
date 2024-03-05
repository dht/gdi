import { ga, runFunction } from '@gdi/firebase';
import { IBoard, actions, selectors } from '@gdi/store-base';
import { BoardIntro, EditorSchema, LinkList, prompt, toast } from '@gdi/ui';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { Json } from '../types';
import { boardAdapter, flowAdapter } from '../utils/globals';
import { l } from '../utils/logs';
import { keysGuard } from './helpers/guards';
import { saveBoardData } from './helpers/saga.clipboard';
import { parseHash, prepareBoardData } from '../utils/boards';
import { predicateCurrentIds } from './predicates';
import { get } from 'lodash';

type Verb =
  | 'openBoardDefinition'
  | 'loadFromUrl'
  | 'bootstrapBoard'
  | 'saveBoard'
  | 'startReview'
  | 'showIntroModal'
  | 'saveBoardData'
  | 'showExamples';

type Action = {
  type: 'BOARD';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  openBoardDefinition: openBoardDefinition,
  loadFromUrl: loadBoardFromUrl,
  bootstrapBoard: bootstrapBoard, // source: board container
  saveBoard: saveBoard,
  showIntroModal: showIntroModal,
  startReview: startReview,
  saveBoardData: saveBoardData,
  showExamples: showExamples,
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

export function* showExamples(_action: Action, board: IBoard) {
  l({ message: 'Showing examples available for this board', verb: 'board', data: {} });

  const { value, didCancel } = yield* call(prompt.custom, {
    title: 'Examples',
    component: LinkList,
    componentProps: {
      // links: list.links,
      // tabs: list.tabs,
    },
  });

  if (didCancel || !value || !value.url) {
    return;
  }

  invokeEvent('nav', { path: value.url });
}

export function* bootstrapBoard(action: Action, _board: IBoard) {
  const { id } = action;

  const isGuest = yield* select(selectors.base.$isGuest);
  const { itemId } = yield* select(selectors.raw.$rawCurrentIds);
  const hashInfo = parseHash(document.location.hash);
  const { boardDbPath } = hashInfo;

  yield put(
    actions.appState.patch({
      boardDbPath,
      prompt: '',
      promptOriginal: '',
      promptRevised: '',
    })
  );

  const board = yield* call(boardAdapter.loadBoard, {
    boardId: id,
    itemId,
    boardDbPath,
    isGuest,
  });

  if (board.flow && !isGuest) {
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

export function* saveBoard(action: Action, board: IBoard) {
  const { storeNodes = [] } = board;

  const all = yield* select((i) => i);
  const state = prepareBoardData(all, storeNodes);

  const response = yield* call(runFunction, '/store/save', {
    state,
  });
}

export function* startReview(_action: Action, board: IBoard) {
  const shouldContinue = yield* call(keysGuard);

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

  const { didCancel, value } = yield prompt.custom({
    title: 'AI Board Intro',
    component: BoardIntro,
    componentProps: {
      boardId: id,
      boardInfo,
      assetsRootUrl,
    },
  });

  if (didCancel || !value) {
    return;
  }

  const { hideNextTime } = value;

  if (hideNextTime) {
    invokeEvent('saveSettings', {
      skipBoardIntro: true,
    });
  }

  yield put({ type: 'PLAY' });
}

export function* board(action: Action) {
  const { verb, id } = action;

  const saga = map[verb];

  const boards = yield* select(selectors.raw.$rawBoards);
  const currentBoard = yield* select(selectors.raw.$rawBoard);
  const board = (boards ?? {})[id] || currentBoard;

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
