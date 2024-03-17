import { selectors, IEvents, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseEventsChange } from './Events.utils';
import { guid4 } from 'shared-base';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'EXTERNAL_EVENT';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addEvent,
  edit: editEvent,
  delete: deleteEvent,
};

export function* addEvent(action: Action, item: IEvents) {
  const { payload } = action;
  const { data } = payload;

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.externalEvents.add({
      id: guid4(),
      ...data,
    })
  );
}

export function* editEvent(action: Action, item: IEvents) {
  const { id, payload } = action;

  const change = parseEventsChange(payload);

  yield put(actions.externalEvents.patch(id, change));
}

export function* deleteEvent(action: Action, item: IEvents) {
  const { id, payload } = action;

  yield put(actions.externalEvents.delete(id));
}

export function* event(action: any) {
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
  yield takeEvery('EXTERNAL_EVENT', event);
}

export const saga = {
  id: 'widgets.externalEvent',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['EXTERNAL_EVENT'],
  },
};
