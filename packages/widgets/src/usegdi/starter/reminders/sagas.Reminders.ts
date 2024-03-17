import { selectors, IReminders } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'REMINDERS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* reminders(action: any) {
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
  yield takeEvery('REMINDERS', reminders);
}

export const saga = {
  id: 'widgets.reminders',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['REMINDERS'],
  },
};
