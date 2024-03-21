import { IContact, actions, selectors } from '@gdi/store-base';
import { prompt, toast } from '@gdi/ui';
import { isEmpty } from 'lodash';
import { fork, put, select, takeEvery } from 'saga-ts';
import { guid4 } from 'shared-base';
import ContactMerge from './_parts/ContactMerge/ContactMerge';
import { parseChange, smartMerge } from './Contacts.utils';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete'
  | 'merge'
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
  merge: mergeContact,
  delete: deleteContact,
  select: selectContact,
};

export function* mergeContact(action: Action, item: IContact) {
  if (!item) return;
  const { id, firstName, lastName } = item;

  const contacts = yield* select(selectors.raw.$rawContacts);
  const matches = Object.values(contacts).filter(
    (i) => i.firstName === firstName && i.lastName === lastName && i.id !== id
  );

  if (isEmpty(matches)) {
    toast.show('No matches found');
    return;
  }

  const merged = smartMerge(item, matches);

  const { value, didCancel } = yield prompt.custom({
    title: `Merge ${firstName} ${lastName}`,
    component: ContactMerge,
    componentProps: {
      items: [merged, ...matches],
    },
  });

  if (didCancel) {
    return;
  }

  const { state, del1, del2, del3 } = value;

  const mainItemChange = state[0];

  yield put(actions.contacts.patch(id, mainItemChange));

  if (del1 && matches[0]) {
    yield put(actions.contacts.delete(matches[0].id));
  }

  if (del2 && matches[1]) {
    yield put(actions.contacts.delete(matches[1].id));
  }

  if (del3 && matches[2]) {
    yield put(actions.contacts.delete(matches[2].id));
  }
}

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
