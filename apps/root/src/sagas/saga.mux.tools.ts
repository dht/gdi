import { put } from 'saga-ts';
import { toolsMap } from '../data/data.tools.map';
import { actions } from '@gdi/store-base';

export function* invokeTools(toolCalls: any) {
  if (toolCalls.length === 0) {
    return;
  }

  const toolCall = toolCalls[0];

  const { name } = toolCall;
  const { prompt, taskType } = toolCall.arguments;

  if (name !== 'getAppIdForTask') {
    return;
  }

  const boardId = toolsMap[taskType];

  if (!boardId) {
    return;
  }

  yield put({ type: 'NAVIGATE', to: `/boards/${boardId}` });
  yield put(actions.appState.patch({ showRoot: false }));
}

export const saga = {
  id: 'root.mux.tools',
  type: 'api',
};
