import { takeEvery } from 'saga-ts';

type Verb =
  | 'bootstrap' //
  | 'tweak';

type Action = {
  type: 'CONTACT';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  bootstrap: bootstrap,
  tweak: tweak,
};

export function* document(action: any) {
  const { verb } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const document = yield* select(selectors.raw.$rawDocument);

  yield* fork(saga, action, document);
}

export function* root() {
  yield takeEvery('DOCUMENT', document);
  yield takeEvery('SET_DOCUMENT', onDocumentChange);
}

export const saga = {
  id: 'widgets.contacts.multi',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['DOCUMENT', 'SET_DOCUMENT'],
  },
};
