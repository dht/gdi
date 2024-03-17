import { selectors, IEvents } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'EXTERNAL_EVENTS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* events(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const events = yield* select(selectors.raw.$rawEvents);
  const item = events[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('EXTERNAL_EVENTS', events);
}

export const saga = {
  id: 'widgets.externalEvents',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['EXTERNAL_EVENTS'],
  },
};
