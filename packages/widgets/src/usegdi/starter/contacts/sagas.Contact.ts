import { selectors, IContact, actions } from '@gdi/store-base';
import { put } from 'redux-saga/effects';
import { fork, select, takeEvery } from 'saga-ts';
import { parseContactChange } from './Contacts.utils';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'CONTACT';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addContact,
  edit: editContact,
  delete: deleteContact,
};

export function* addContact(action: Action, item: IContact) {
  const { payload } = action;
}

export function* editContact(action: Action, item: IContact) {
  const { id, payload } = action;

  const change = parseContactChange(payload);

  yield put(actions.contacts.patch(id, change));
}

export function* deleteContact(action: Action, item: IContact) {
  const { id, payload } = action;

  yield put(actions.contacts.delete(id));
}

export function* contact(action: any) {
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
  yield takeEvery('CONTACT', contact);
}

export const saga = {
  id: 'widgets.contacts',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['CONTACT'],
  },
};
