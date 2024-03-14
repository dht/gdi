import { selectors, IContact } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'CONTACTS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* contacts(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const contacts = yield* select(selectors.raw.$rawContacts);
  const item = contacts[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('CONTACTS', contacts);
}

export const saga = {
  id: 'widgets.contacts',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['CONTACTS'],
  },
};
