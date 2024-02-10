import { ga, runFunction } from '@gdi/firebase';
import { actions, selectors } from '@gdi/store-base';
import { playSfx, toast } from '@gdi/ui';
import { get } from 'lodash';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { storageUrl } from '../utils/axios';
import { flowAdapter } from '../utils/globals';
import { customEvenChannel } from './channels/channel.customEvent';
import { onFlowMobileEnd, onFlowMobileStart } from './helpers/saga.mobile';
import { postActions } from './helpers/saga.postFlow';
import { getPromptPlaceholder } from './helpers/utils';
import { boardGuard, guestGuard } from './saga.gdi';

export function* startFlow(action: any) {
  try {
    const { prompt } = action;

    if (!prompt) {
      return;
    }

    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const { boardId } = currentIds;

    let shouldContinue = yield* call(guestGuard);
    if (!shouldContinue) {
      ga('startFlow.guest', { boardId });
      return;
    }

    shouldContinue = yield* call(boardGuard);
    if (!shouldContinue) {
      return;
    }

    ga('startFlow', { boardId });

    playSfx('prompt');

    const appState = yield* select(selectors.raw.$rawAppState);
    const { promptParams } = appState;

    yield put(actions.flowState.patch({ status: 'waiting' }));
    yield put(actions.appState.patch({ promptOriginal: prompt }));

    const board = yield* select(selectors.raw.$rawBoard);
    yield fork(onFlowMobileStart, board);

    const flow = yield* select(selectors.base.$flow);
    const fileNameInstructions = get(flow, 'flowConfig.fileNameInstructions', '');

    yield fork(generateFileName, fileNameInstructions, prompt);

    const response = yield* call(flowAdapter.start, prompt, promptParams, {
      boardId: board.id,
      boardIdentifier: board.identifier,
    });

    if (!response.success) {
      toast.show('Error starting flow', 'error');
      return;
    }

    if (flow.flowConfig.cumulativeThread) {
      yield put({ type: 'TRANSCRIPT_PROMPT', prompt });
    }
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'saga.prompt.ts',
      method: 'startFlow',
      saga,
      err,
    });
  }
}

export function* generateFileName(fileNameInstructions: string, prompt: string) {
  if (!fileNameInstructions || !prompt) {
    return;
  }

  const response = yield* call(runFunction, '/api/assets/fileName', {
    instructions: fileNameInstructions,
    prompt,
  });

  const { fileName } = response;

  if (!fileName) {
    return;
  }

  yield put(
    actions.appState.patch({
      suggestedFileName: fileName,
    })
  );
}

export function* bootstrap(action: any) {
  const { nodes } = action;

  const placeholder = yield* call(getPromptPlaceholder, nodes);

  yield put(
    actions.appState.patch({
      promptPlaceholder: placeholder as string,
    })
  );
}

export function* listenToFlowRun(event: any) {
  // debounce
  yield delay(500);

  const { data } = event;

  const { flowState, nodeState } = data;
  const { status } = flowState;

  yield put(actions.flowState.patch(flowState));

  for (let nodeId in nodeState) {
    const node = nodeState[nodeId];
    yield put(actions.flowNodes.patch(nodeId, node));
  }

  if (status === 'done') {
    yield fork(onFlowCompleted, data);
  }
}

export function* onFlowCompleted(event: any) {
  const { flowRun } = event.data;
  const board = yield* select(selectors.raw.$rawBoard);

  yield fork(onFlowMobileEnd, board);

  const flowConfig = get(board, 'flow.flowConfig', '');

  ga('onFlowCompleted', { boardId: board.id });

  if (!flowConfig) {
    console.log('No flowConfig found');
    return;
  }

  const { textToSpeech, output, improveAssistantId, postFlavour } = flowConfig;

  const { variables } = flowRun;

  yield fork(postActions.parseOutput, board, { output, variables });

  if (textToSpeech) {
    yield call(postActions.textToSpeech, board, variables);
  }

  if (improveAssistantId) {
    yield call(postActions.improve, board, variables);
  }

  if (postFlavour) {
    yield put(actions.appState.patch({ flavour: postFlavour }));
  }
}

// from existing assistant
export function* dynamicFlow(action: any) {
  const { assistantId } = action;

  yield delay(500);

  const assistants = yield* select(selectors.raw.$rawAssistants);
  const assistant = assistants[assistantId];

  if (!assistant) {
    console.log('No assistant found');
    return;
  }

  const response = yield* call(flowAdapter.setAssistant, assistant);

  if (!response.success) {
    toast.show('Error setting assistant', 'error');
    return;
  }
}

// from new assistant
export function* dynamicFlowAdhoc(action: any) {
  const { assistant } = action;

  yield delay(500);

  if (!assistant) {
    console.log('No assistant given');
    return;
  }

  const response = yield* call(flowAdapter.setAssistant, assistant);

  if (!response.success) {
    toast.show('Error setting assistant', 'error');
    return;
  }
}

export function* root() {
  if (storageUrl) {
    yield put(actions.appState.patch({ storageUrl }));
  }

  yield delay(10);

  // yield call(getIp);

  yield takeEvery('PROMPT', startFlow);
  yield takeEvery('BOOTSTRAP_FLOW', bootstrap);
  yield takeEvery('FLOW_CHANGE_ASSISTANT', dynamicFlow);
  yield takeEvery('FLOW_SET_ASSISTANT', dynamicFlowAdhoc);

  const channel = customEvenChannel('flow/completed');
  yield takeEvery(channel, onFlowCompleted);

  // yield takeEvery('PUSH_LOG', checkIfCompleted);
}

export const saga = {
  id: 'gdi.prompt',
  type: 'customEvent',
  root: root,
  trigger: {
    actionTypes: ['PROMPT', 'BOOTSTRAP_FLOW', 'FLOW_CHANGES_ASSISTANT'],
    eventNames: ['flow/completed'],
  },
};
