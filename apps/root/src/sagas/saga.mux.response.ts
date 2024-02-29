import { actions } from '@gdi/store-base';
import { call, put } from 'saga-ts';
import { guid4 } from 'shared-base';
import { invokeTools } from './saga.mux.tools';
import { get } from 'lodash';

export function* parseResponse(response: any) {
  let { finishReason, content, toolCalls } = response;

  if (finishReason === 'tool_calls') {
    yield call(invokeTools, toolCalls);

    const capabilityId = get(toolCalls, '[0].arguments.taskType', '');

    content = `I found a capability (${capabilityId}) that can help you with that. Click on "Start workflow" on the right-side panel to get started.`;
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
