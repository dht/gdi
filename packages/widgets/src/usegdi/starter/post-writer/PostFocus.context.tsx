import { createContext, useMemo } from 'react';
import { getJson, invokeEvent } from 'shared-base';
import { useLocalDb } from '../../../../../hooks/useLocalDb';
import { IWritePostContext, IWritePostProviderProps, IWritePostState } from './PostFocus.types';

const ls = getJson('bootstrap_post');
const { postPlatform = 'X', postAudience = 'developers', postTone = 'casual' } = ls ?? {};

export const initialState: IWritePostState = {
  context: '',
  instructions0: 'suggest a clever reply',
  body: '',
  instructionsId1: '1',
  instructions1: 'improve it',
  output1: '',
  instructionsId2: '2',
  instructions2: 'only fix mistakes',
  output2: '',
  instructionsId3: '3',
  instructions3: 'shorten',
  output3: '',
  focusIndex: 1,
  postPlatform,
  postAudience,
  postTone,
};

export const WritePostContext = createContext<IWritePostContext>({
  state: {
    ...initialState,
  },
  patchState: () => {},
  itemId: '',
  callbacks: {
    onRunMain: () => {},
    onRunSingle: () => {},
    onRunAll: () => {},
    onClear: () => {},
    onAdopt: () => {},
  },
});

export const WritePostProvider = (props: IWritePostProviderProps) => {
  const { itemId, callbacks: inCallbacks } = props;
  const [state, patchState] = useLocalDb<IWritePostState>('writePost', { ...initialState });

  const callbacks = useMemo(
    () => ({
      onRunMain: () => {
        inCallbacks.onRunMain(state);
      },
      onRunSingle: (index: number) => {
        inCallbacks.onRunSingle(index, state);
      },
      onRunAll: () => {
        inCallbacks.onRunAll(state);
      },
      onClear: () => {
        inCallbacks.onClear(state);
      },
      onAdopt: (index: number) => {
        const key = `output${index}`;
        const content = (state as any)[key];
        patchState({ body: content });
      },
    }),
    [state, inCallbacks]
  );

  const cValue = useMemo(
    () => ({
      state,
      patchState,
      itemId,
      callbacks,
    }),
    [state, callbacks, itemId]
  );

  return <WritePostContext.Provider value={cValue}>{props.children}</WritePostContext.Provider>;
};
