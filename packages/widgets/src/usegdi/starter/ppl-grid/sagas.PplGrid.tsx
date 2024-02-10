import { actions, selectors } from '@gdi/store-base';
import { fork, put, select, takeEvery } from 'saga-ts';
import { predicateCurrentIds } from '../../../helpers/predicates';
import { parseAssistant } from './PplGrid.data';

export function* changeAssistant() {
  const currentIds = yield* select(selectors.raw.$rawCurrentIds);
  const { personId, tabId = 'talk_with' } = currentIds;

  if (!personId || !tabId) {
    return;
  }

  const assistant = parseAssistant(personId, tabId);

  if (!assistant) {
    return;
  }

  yield put({
    type: 'FLOW_SET_ASSISTANT',
    assistant,
  });
}

export function* bootstrap() {
  const currentIds = yield* select(selectors.raw.$rawCurrentIds);
  const { personId } = currentIds;

  yield fork(changeAssistant);
  yield put(actions.currentIds.patch({ tabId: 'talk_with' }));
}

export function* root() {
  yield takeEvery(predicateCurrentIds('personId'), changeAssistant);
  yield takeEvery(predicateCurrentIds('tabId'), changeAssistant);

  yield fork(bootstrap);
}

export const saga = {
  id: 'widgets.pplGrid',
  type: 'component',
  root: root,
  trigger: {
    eventNames: ['ppl/change', 'ppl/flavour'],
  },
};
