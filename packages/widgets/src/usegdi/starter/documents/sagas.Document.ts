import { selectors, IItem, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery, call } from 'saga-ts';
import { parseChange, parseDocumentTitle } from './Documents.utils';
import { guid4 } from 'shared-base';
import { toast } from '@gdi/ui';
import { runFunction } from '@gdi/firebase';
import { verifyProject } from '../scene/_helpers/helper.projects';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete'
  | 'fetch'
  | 'saveDocument';

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
  fetch: fetchDocument,
  saveDocument: saveDocument,
};

export function* addDocument(action: Action, item: IItem) {
  const { payload } = action;
  const { data } = payload;

  const projectId = yield* call(verifyProject);

  const metaParams = yield* select(selectors.base.$metaParams);

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  const { title } = data;
  const fileName = title ? parseDocumentTitle(title) : '';

  yield* put(
    actions.docs.add({
      id: guid4(),
      ...data,
      ...metaParams,
      fileName,
    })
  );

  toast.show('Document added');
}

export function* fetchDocument(action: Action, item: IItem) {
  const { id, project, filePath, fileName } = item;

  yield put(actions.document.patch({ content: '', meta: { fileName } }));
  yield put(actions.currentIds.patch({ docId: id }));

  // document is new
  if (!filePath) {
    return;
  }

  const response = yield* call(runFunction, `/api/docs/${id}/get`, {
    project,
    filePath,
  });

  if (!response.success) {
    return;
  }

  const { content, meta } = response;

  yield put(actions.document.patch({ content, meta }));
  yield put(actions.currentIds.patch({ docId: id }));
}

export function* saveDocument(action: Action, item: IItem) {
  const { id, project } = item;
  const { payload } = action;
  const { fileName } = payload;

  const document = yield* select(selectors.raw.$rawDocument);
  const { content } = document;

  const response = yield* call(runFunction, `/api/docs/${id}/update`, {
    project,
    fileName,
    content,
  });

  if (!response.success) {
    return;
  }
}

export function* editDocument(action: Action, item: IItem) {
  const { id, payload } = action;

  const change = parseChange(payload);

  yield put(actions.docs.patch(id, change));
}

export function* deleteDocument(action: Action, item: IItem) {
  const { payload } = action;
  const { id, project, filePath } = item;

  const response = yield* call(runFunction, `/api/docs/${id}/delete`, {
    project,
    filePath,
  });

  yield put(actions.docs.delete(id));

  if (!response.success) {
    toast.show('Document not deleted', 'error');
    return;
  }

  toast.show('Document deleted');
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
