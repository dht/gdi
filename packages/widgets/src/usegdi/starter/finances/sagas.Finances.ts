import { selectors, IFinanceLines } from '@gdi/store-base';
import { fork, select, takeEvery } from 'saga-ts';

type Verb = '';

type Action = {
  type: 'FINANCES';
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {};

export function* finances(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const finances = yield* select(selectors.raw.$rawFinanceLines);
  const item = finances[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('FINANCE_LINES', finances);
}

export const saga = {
  id: 'widgets.finances',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['FINANCE_LINES'],
  },
};
