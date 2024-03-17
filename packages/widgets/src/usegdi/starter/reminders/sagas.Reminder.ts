import { selectors, IReminders, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseRemindersChange } from './Reminders.utils';
import { guid4 } from 'shared-base';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'REMINDER';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addReminder,
  edit: editReminder,
  delete: deleteReminder,
};

export function* addReminder(action: Action, item: IReminders) {
  const { payload } = action;
  const { data } = payload;

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.reminders.add({
      id: guid4(),
      ...data,
    })
  );
}

export function* editReminder(action: Action, item: IReminders) {
  const { id, payload } = action;

  const change = parseRemindersChange(payload);

  yield put(actions.reminders.patch(id, change));
}

export function* deleteReminder(action: Action, item: IReminders) {
  const { id, payload } = action;

  yield put(actions.reminders.delete(id));
}

export function* reminder(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const reminders = yield* select(selectors.raw.$rawReminders);
  const item = reminders[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('REMINDER', reminder);
}

export const saga = {
  id: 'widgets.reminder',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['REMINDER'],
  },
};
