import { actions } from '@gdi/store-base';
import { call, put } from 'saga-ts';
import { guid4 } from 'shared-base';
import { invokeTools } from './saga.mux.tools';
import { get, isEmpty } from 'lodash';
import { toast } from '@gdi/ui';

export function* parseResponse(response: any) {
  let { finishReason, content, toolCalls, flagged } = response;

  if (flagged) {
    toast.show(
      'Your message was flagged. Please clear the chat and try again.',
      'error'
    );
    return;
  }

  if (finishReason === 'tool_calls') {
    yield call(invokeTools, toolCalls);

    const capabilityId = get(toolCalls, '[0].name', '');
    const args = get(toolCalls, '[0].arguments', '');

    content = `I found a capability (${capabilityId}) that can help you with that. Click on "Start workflow" on the right-side panel to get started.`;

    if (args && !isEmpty(args)) {
      content += ` Here are the params: ${JSON.stringify(args)}.`;
    }
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
