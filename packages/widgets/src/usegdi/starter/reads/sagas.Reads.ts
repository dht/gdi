import { selectors, IReads } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'READS';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* reads(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const reads = yield* select(selectors.raw.$rawReads);
  const item = reads[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('READS', reads);
}

export const saga = {
  id: 'widgets.reads',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['READS'],
  },
};
