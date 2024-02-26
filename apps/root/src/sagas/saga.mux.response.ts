import { actions } from '@gdi/store-base';
import { call, put } from 'saga-ts';
import { guid4 } from 'shared-base';
import { invokeTools } from './saga.mux.tools';

export function* parseResponse(response: any) {
  const { finishReason, content, toolCalls } = response;

  if (finishReason === 'tool_calls') {
    yield call(invokeTools, toolCalls);
    return;
  }

  yield put(
    actions.messages.add({
      id: guid4(),
      content,
      role: 'assistant',
      timestamp: Date.now(),
    })
  );
}

export const saga = {
  id: 'root.mux.response',
  type: 'api',
};
