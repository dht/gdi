import { selectors, ICalendar } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'CALENDAR_EVENTS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* calendars(action: any) {
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
  yield takeEvery('CONTACTS', calendars);
}

export const saga = {
  id: 'widgets.calendarEvents',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['CALENDAR_EVENTS'],
  },
};
