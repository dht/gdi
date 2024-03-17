import { selectors, IDocuments } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'DOCUMENTS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* documents(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const documents = yield* select(selectors.raw.$rawDocuments);
  const item = documents[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('DOCUMENTS', documents);
}

export const saga = {
  id: 'widgets.documents',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['DOCUMENTS'],
  },
};
