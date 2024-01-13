import { runFunction, ga } from '@gdi/firebase';
import { actions, selectors } from '@gdi/store-base';
import { isMobile, prompt, toast } from '@gdi/ui';
import { call, delay, put, select, takeEvery } from 'saga-ts';
import quickStartBoardIds from '../data/quickStart.json';
import { checkGuest } from './helpers/guest';
import SwitchAdapter from '../components/SwitchAdapter/SwitchAdapter';
import { setBoolean, setString } from 'shared-base';

type Verb =
  | 'preview' //
  | 'install'
  | 'uninstall'
  | 'source'
  | 'npm'
  | 'vscode'
  | 'reviewStart'
  | 'share'
  | 'switchAdapter'
  | 'save'
  | 'quickStart'
  | 'board';

export type ActionHome = {
  type: 'HOME';
  verb: Verb;
  id: string;
  params?: Json;
};

const mapVerbToSaga: Record<Verb, any> = {
  preview: preview,
  install: install,
  uninstall: uninstall,
  source: source,
  npm: npm,
  vscode: vscode,
  reviewStart: reviewStart,
  share: share,
  save: save,
  switchAdapter: switchAdapter,
  quickStart: quickStart,
  board: board,
};

function* preview(action: ActionHome, board: Json) {
  const { url } = board;

  yield put({
    type: 'NAVIGATE',
    to: url,
  });
}

function* board(action: ActionHome, board: Json) {
  const { params } = action;
  const { isBrowse } = params ?? {};
  const { id, url } = board;

  let to = `/browse/${id}`;

  const settings = yield* select(selectors.raw.$rawSettings);
  const { skipBoardDetails } = settings;

  if (!isBrowse && skipBoardDetails) {
    to = url;
  }

  yield put({
    type: 'NAVIGATE',
    to,
  });
}

function* install(action: ActionHome, board: Json, silent: boolean = false) {
  const isGuest = yield* call(checkGuest);

  if (isGuest) {
    toast.show('You must be logged in to install boards');
    return;
  }

  const response = yield* call(runFunction, '/api/boards/add', {
    id: board.id,
  });

  if (response.success && !silent) {
    return;
  }

  yield put(
    actions.myBoards.set(board.id, {
      id: board.id,
      tsAdded: Date.now(),
      tsLastOpened: Date.now(),
    })
  );
}

function* uninstall(action: ActionHome, board: Json) {
  const isGuest = yield* call(checkGuest);

  if (isGuest) {
    return;
  }

  const response = yield* call(runFunction, '/api/boards/remove', {
    id: board.id,
  });

  if (response.success) {
    toast.show('Board removed from your boards');
  }

  yield put(actions.myBoards.delete(board.id));
}

function* source(action: ActionHome, board: Json) {
  const { sourceUrl } = board;

  yield put({
    type: 'NAVIGATE',
    to: sourceUrl,
  });
}

function* npm(action: ActionHome, board: Json) {
  const { npmUrl } = board;

  yield put({
    type: 'NAVIGATE',
    to: npmUrl,
  });
}

function* switchAdapter(action: ActionHome, board: Json) {
  const appState = yield* select(selectors.raw.$rawAppState);

  const { isLocalInstance, localInstanceUrl } = appState;

  const { value: toLocal, didCancel } = yield prompt.custom({
    title: 'Switch Adapter',
    component: SwitchAdapter,
    componentProps: {
      isLocalInstance,
      localInstanceUrl,
    },
  });

  if (didCancel) {
    return;
  }

  if (toLocal) {
    const { value, didCancel } = yield prompt.input({
      title: 'Instance URL',
      defaultValue: localInstanceUrl ?? 'http://localhost:3005',
      placeholder: 'Enter your local instance URL and port',
      ctaButtonText: 'Set URL',
    });

    if (didCancel || !value) {
      return;
    }

    setBoolean('USE_INSTANCE', true);
    setString('INSTANCE_URL', value);
  } else {
    setBoolean('USE_INSTANCE', false);
  }

  document.location.reload();
}

function* vscode(action: ActionHome, board: Json) {
  const { vscodeUrl } = board;

  yield put({
    type: 'NAVIGATE',
    to: vscodeUrl,
  });
}

function* reviewStart(action: ActionHome, board: Json) {}

function* share(action: ActionHome, board: Json) {
  toast.show('Link copied to clipboard');
  const url = document.location.href;
  navigator.clipboard.writeText(url);
}

function* save(action: ActionHome, board: Json) {
  const isGuest = yield* call(checkGuest);

  if (isGuest) {
    return;
  }

  const response = yield* call(runFunction, '/api/boards/saveForLater', {
    id: board.id,
  });

  if (response.success) {
    toast.show('Board saved for later');
  }
}

function* quickStart(action: ActionHome, board: Json) {
  for (let id of quickStartBoardIds) {
    yield call(install, action, { id }, true);
  }
}

export function* home(action: ActionHome) {
  const { verb, id } = action;
  yield delay(100);

  const saga = mapVerbToSaga[verb];

  const boards = yield* select(selectors.raw.$rawBoards);
  const board = (boards ?? {})[id];

  if (!saga) {
    return;
  }

  ga(`home.${verb}`, { boardId: id });

  yield* saga(action, board);
}

export function* root() {
  yield takeEvery('HOME', home);
}

export const saga = {
  id: 'home.home',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['HOME'],
  },
};
