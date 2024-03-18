import { selectors, IContact, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseChange } from './Contacts.utils';
import { isEmpty } from 'lodash';
import { guid4, invokeEvent } from 'shared-base';
import { toast } from '@gdi/ui';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete'
  | 'select';

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
  select: selectContact,
};

export function* addContact(action: Action, _item: IContact) {
  const { payload } = action;
  const { data } = payload;

  const metaParams = yield* select(selectors.base.$metaParams);

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.contacts.add({
      id: guid4(),
      ...data,
      ...metaParams,
    })
  );

  toast.show('Contact added');
}

export function* editContact(action: Action, item: IContact) {
  const { id, payload } = action;

  const change = parseChange(payload);

  yield put(actions.contacts.patch(id, change));
}

export function* selectContact(action: Action, item: IContact) {}

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
