import { selectors, IDocuments, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseDocumentsChange } from './Documents.utils';
import { guid4 } from 'shared-base';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'DOCUMENT';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addDocument,
  edit: editDocument,
  delete: deleteDocument,
};

export function* addDocument(action: Action, item: IDocuments) {
  const { payload } = action;
  const { data } = payload;

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.docs.add({
      id: guid4(),
      ...data,
    })
  );
}

export function* editDocument(action: Action, item: IDocuments) {
  const { id, payload } = action;

  const change = parseDocumentsChange(payload);

  yield put(actions.docs.patch(id, change));
}

export function* deleteDocument(action: Action, item: IDocuments) {
  const { id, payload } = action;

  yield put(actions.docs.delete(id));
}

export function* document(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const documents = yield* select(selectors.raw.$rawDocs);
  const item = documents[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('DOCUMENT', document);
}

export const saga = {
  id: 'widgets.document',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['DOCUMENT'],
  },
};
