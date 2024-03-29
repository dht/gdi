import { actions, selectors } from '@gdi/store-base';
import { put, select } from 'saga-ts';

export function* invokeTools(toolCalls: any) {
  if (toolCalls.length === 0) {
    return;
  }

  const toolCall = toolCalls[0];

  const { name } = toolCall;

  const capability = yield* select(selectors.single.$capability, name);

  if (!capability) {
    return;
  }

  yield put(actions.currentIds.patch({ capabilityId: capability.id }));
}

export const saga = {
  id: 'root.mux.tools',
  type: 'api',
};
