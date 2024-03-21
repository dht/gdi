import { actions, selectors } from '@gdi/store-base';
import { prompt, toast } from '@gdi/ui';
import { delay, put, select } from 'saga-ts';
import { guid4, invokeEvent } from 'shared-base';
import { takeEvery } from 'typed-redux-saga';
import { Json } from '../types';

type Entity =
  | 'contact'
  | 'meeting'
  | 'reminder'
  | 'todo'
  | 'doc'
  | 'list'
  | 'event'
  | 'read'
  | 'message';

type Cta =
  | 'cta_contact'
  | 'cta_meeting'
  | 'cta_reminder'
  | 'cta_todo'
  | 'cta_document'
  | 'cta_list'
  | 'cta_event'
  | 'cta_read'
  | 'cta_message';

type Action = {
  type: 'CROSS_POLLINATE';
  source: Entity;
  cta: Cta;
  id: string;
  item: Json;
};

const map: any = {
  cta_contact: actions.contacts.add,
  cta_meeting: actions.events.add,
  cta_reminder: actions.reminders.add,
  cta_todo: actions.todos.add,
  cta_document: actions.docs.add,
  cta_list: actions.listItems.add,
  cta_event: actions.externalEvents.add,
  cta_read: actions.reads.add,
  cta_message: actions.messages.add,
};

const requiresTitle = ['cta_meeting', 'cta_reminder', 'cta_todo', 'cta_document', 'cta_event'];

export function* navigate(to: Entity, id: string) {
  const muxTabs = yield* select(selectors.raw.$rawMuxTabs);
  const multis = yield* select(selectors.raw.$rawMultis);

  const toPlural = to + 's';

  if (muxTabs[toPlural]) {
    invokeEvent('tabs/setActive', { id: toPlural });
    return;
  }

  const multi = multis[toPlural];
  if (!multi) return;

  yield put(actions.muxTabs.set(multi.id, multi));
  yield put(actions.currentIds.patch({ muxTabId: multi.id }));
  invokeEvent('tabs/setActive', { id: multi.id });
}

export function* crossPollinate(action: Action) {
  const { source, id, item, cta } = action;

  if (!requiresTitle.includes(action.cta)) {
    return;
  }

  const entityName = cta.replace('cta_', '');
  const dataTag = `${source}_${id}`;

  const { value, didCancel } = yield prompt.input({
    title: 'Title',
    placeholder: 'Enter a title for ' + entityName,
    ctaButtonText: 'Create',
  });

  if (didCancel || !value) {
    return;
  }

  const metaParams = yield* select(selectors.base.$metaParamsWithWeek);

  const actionCreator = map[cta];

  const newItemId = guid4();

  const newItem = {
    id: newItemId,
    title: value,
    ...metaParams,
    dataTags: [dataTag],
  };

  yield put(actions.currentIds.patch({ newItemId }));

  yield* put(actionCreator(newItem));
  toast.show(`${entityName} added`);

  yield* navigate(entityName as Entity, newItem.id);
}

export function* root() {
  yield delay(0);
  yield* takeEvery('CROSS_POLLINATE', crossPollinate);
}

export const saga = {
  id: 'gdi.pollinate',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
