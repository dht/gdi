import { IDocument, actions, selectors } from '@gdi/store-base';
import { fork, put, select, takeEvery } from 'saga-ts';

const LOCALE_STORAGE_KEY = 'locale';

type Verb =
  | 'bootstrap' //
  | 'tweak';

type Action = {
  type: 'DOCUMENT';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  bootstrap: bootstrap,
  tweak: tweak,
};

export function* bootstrap(action: Action, document: IDocument) {
  const { payload } = action;
  const { documentType, lengthInstructions, styleInstructions, topicAndInstructions } = payload;

  const instructions = `I am writing a ${documentType}, ${lengthInstructions}, ${styleInstructions} about ${topicAndInstructions}`;

  yield put({ type: 'PROMPT', prompt: instructions });
}

export function* tweak(action: Action, document: IDocument) {
  const { payload } = action;
}

export function* document(action: any) {
  const { verb } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const document = yield* select(selectors.raw.$rawDocument);

  yield* fork(saga, action, document);
}

export function* onDocumentChange(action: any) {
  const { payload } = action;
  const { content = '' } = payload ?? {};

  const nextFlavour = content.length === 0 ? 'default' : 'adhoc';

  yield put(actions.appState.patch({ flavour: nextFlavour }));
}

export function* root() {
  yield takeEvery('DOCUMENT', document);
  yield takeEvery('SET_DOCUMENT', onDocumentChange);
}

export const saga = {
  id: 'widgets.document',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['DOCUMENT', 'SET_DOCUMENT'],
  },
};
