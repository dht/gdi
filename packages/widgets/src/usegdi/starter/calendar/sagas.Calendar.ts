import { selectors, ICalendar, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseCalendarChange } from './Calendar.utils';
import { guid4 } from 'shared-base';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'CALENDAR_EVENT';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addEvent,
  edit: editEvent,
  delete: deleteEvent,
};

export function* addEvent(action: Action, item: ICalendar) {
  const { payload } = action;
  const { data } = payload;

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.events.add({
      id: guid4(),
      ...data,
    })
  );
}

export function* editEvent(action: Action, item: ICalendar) {
  const { id, payload } = action;

  const change = parseCalendarChange(payload);

  yield put(actions.events.patch(id, change));
}

export function* deleteEvent(action: Action, item: ICalendar) {
  const { id, payload } = action;

  yield put(actions.events.delete(id));
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
  yield takeEvery('CALENDAR_EVENT', event);
}

export const saga = {
  id: 'widgets.calendarEvent',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['CALENDAR_EVENT'],
  },
};
