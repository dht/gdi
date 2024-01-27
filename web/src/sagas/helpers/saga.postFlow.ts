import { IBoard, actions } from '@gdi/store-base';
import { get } from 'lodash';
import { call, put } from 'saga-ts';
import { shortId } from '../../utils/boards';
import { boardAdapter } from '../../utils/globals';
import { speakLastAssistantLine } from '../../utils/speech';
import { runFunction } from '@gdi/firebase';
import { arrayToObject } from '../../utils/object';

export const postActions = {
  textToSpeech,
  parseOutput,
  improve,
};

export function* textToSpeech(_board: IBoard, params: any) {
  const { transcriptLines } = params;
  yield call(speakLastAssistantLine, transcriptLines);
}

export function* parseOutput(_board: IBoard, params: any) {
  const { variables = {}, output = {} } = params;

  for (let i of Object.keys(output)) {
    const xPath = output[i];
    const value = get(variables, i);
    const actionCreator = get({ actions }, xPath);
    let action;

    if (xPath.includes('patch')) {
      action = actionCreator({ [i]: value });
    } else {
      action = actionCreator(value);
    }

    yield put(action);
  }
}

export function* improve(board: IBoard, params: any) {
  try {
    const { documentRaw } = params;

    const assistantId = get(board, 'flow.flowConfig.improveAssistantId');
    const assistant = get(board, `flow.flowAssistants.${assistantId}`);
    yield put(actions.documentSuggestions.setAll({}));

    if (!assistant) {
      console.log('No assistant found');
      return;
    }

    yield put(actions.appState.patch({ isFetchingSuggestions: true }));

    const response = yield* call(runFunction, '/api/document/improve', {
      assistant,
      prompt: `here is the document:\n${documentRaw}`,
    });

    yield put(actions.appState.patch({ isFetchingSuggestions: false }));

    if (!response || !response.success || typeof response.data !== 'object') {
      return;
    }

    const suggestions = arrayToObject(response.data);
    yield put(actions.documentSuggestions.setAll(suggestions));
  } catch (err) {}
}
