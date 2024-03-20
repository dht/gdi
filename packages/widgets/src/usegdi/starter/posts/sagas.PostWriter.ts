import { IPosts, selectors } from '@gdi/store-base';
import { call, fork, select, takeEvery } from 'saga-ts';
import { templates } from './Posts.templates';
import { cleanResponse, parseTemplate } from './Posts.utils';
import { runFunction } from '@gdi/firebase';
import { invokeEvent } from 'shared-base';

type Verb =
  | 'runMain' //
  | 'runSingle'
  | 'runAll'
  | 'clear';

type Action = {
  type: 'POST_WRITER';
  id: string;
  index: number; // for runSingle
  verb: Verb;
  payload: Json;
};

const map: Record<Verb, any> = {
  runMain: runMain,
  runSingle: runSingle,
  runAll: runAll,
  clear: clear,
};

export function* runMain(action: Action, _item: IPosts) {
  const { payload } = action;

  const prompt = parseTemplate(templates.main, payload);

  invokeEvent('useLocalDb/writePost', {
    instructions0: '',
    isRunningMain: true,
  });

  const response = yield* call(runFunction, '/api/ai/chat', {
    prompt,
  });

  const { text = '' } = response;

  invokeEvent('useLocalDb/writePost', {
    body: cleanResponse(text),
    isRunningMain: false,
  });
}

export function* runSingle(action: Action, _item: IPosts) {
  const { index, payload } = action;

  const templateId = `instructions${index}`;
  const prompt = parseTemplate((templates as any)[templateId], payload);

  invokeEvent('useLocalDb/writePost', {
    [`isRunning${index}`]: true,
  });

  const response = yield* call(runFunction, '/api/ai/chat', {
    prompt,
  });

  const { text = '' } = response;

  const key = `output${index}`;

  invokeEvent('useLocalDb/writePost', {
    [key]: cleanResponse(text),
    [`isRunning${index}`]: false,
  });
}

export function* runAll(action: Action, item: IPosts) {
  yield* fork(runSingle, { ...action, index: 1 }, item);
  yield* fork(runSingle, { ...action, index: 2 }, item);
  yield* fork(runSingle, { ...action, index: 3 }, item);
}

export function* clear(_action: Action, _item: IPosts) {
  invokeEvent('useLocalDb/writePost', {
    instructions0: 'suggest a clever reply',
    body: '',
    output1: '',
    output2: '',
    output3: '',
    isRunningMain: '',
    isRunning1: '',
    isRunning2: '',
    isRunning3: '',
  });
}

export function* writePost(action: any) {
  const { verb, id } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const posts = yield* select(selectors.raw.$rawPosts);
  const item = posts[id];

  yield* fork(saga, action, item);
}

export function* root() {
  yield takeEvery('POST_WRITER', writePost);
}

export const saga = {
  id: 'widgets.postWriter',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['POST_WRITER'],
  },
};
