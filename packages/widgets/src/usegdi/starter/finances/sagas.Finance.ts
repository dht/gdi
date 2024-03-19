import { selectors, IFinanceLine, actions } from '@gdi/store-base';
import { put, fork, select, takeEvery } from 'saga-ts';
import { parseChange } from './Finances.utils';
import { guid4 } from 'shared-base';
import { toast } from '@gdi/ui';

type Verb =
  | 'add' //
  | 'edit'
  | 'delete';

type Action = {
  type: 'FINANCE';
  id: string;
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  add: addFinance,
  edit: editFinance,
  delete: deleteFinance,
};

export function* addFinance(action: Action, item: IFinanceLine) {
  const { payload } = action;
  const { data } = payload;

  const metaParams = yield* select(selectors.base.$metaParams);

  const isValid = Object.values(data).filter((i) => i).length > 0;

  if (!isValid) {
    return;
  }

  yield* put(
    actions.financeLines.add({
      id: guid4(),
      ...data,
      ...metaParams,
    })
  );

  toast.show('Finance added');
}

export function* editFinance(action: Action, item: IFinanceLine) {
  const { id, payload } = action;

  const change = parseChange(payload);

  yield put(actions.financeLines.patch(id, change));
}

export function* deleteFinance(action: Action, item: IFinanceLine) {
  const { id, payload } = action;

  yield put(actions.financeLines.delete(id));
}

export function* finance(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const lines = yield* select(selectors.raw.$rawFinanceLines);
  const item = lines[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('FINANCE_LINE', finance);
}

export const saga = {
  id: 'widgets.finance',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['FINANCE_LINE'],
  },
};
