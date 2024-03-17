import { actions } from '@gdi/store-base';
import { delay, fork, put, take } from 'saga-ts';
import { invokeEvent } from 'shared-base';

export function* myData() {
  try {
    yield delay(100);

    const promises = [
      yield* put(actions.docs.get({})),
      yield* put(actions.contacts.get({})),
      yield* put(actions.todos.get({})),
      yield* put(actions.financeLines.get({})),
      yield* put(actions.lists.get({})),
      yield* put(actions.listItems.get({})),
      yield* put(actions.events.get({})),
      yield* put(actions.externalEvents.get({})),
      yield* put(actions.locations.get({})),
      yield* put(actions.posts.get({})),
      yield* put(actions.reads.get({})),
      yield* put(actions.sales.get({})),
      yield* put(actions.reminders.get({})),
      yield* put(actions.things.get({})),
    ];

    console.time('Promise.all');
    yield Promise.all(promises);
    console.timeEnd('Promise.all');
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.md.ts',
      method: 'myData',
      saga,
      err,
    });
  }
}

export function* root() {
  yield take('AUTHENTICATION_COMPLETED');
  yield* fork(myData);
}

export const saga = {
  id: 'gdi.md',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
