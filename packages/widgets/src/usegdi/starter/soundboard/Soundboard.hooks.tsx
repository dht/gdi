import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { generateActionsForStore, generateReducersForStore } from 'redux-store-generator';
import * as data from './Soundboard.data';
import { LocalStore, ISession } from './Soundboard.types';
import { combineReducer, minutesToTimeText } from './Soundboard.utils';
import { useLocalStorage, useMount } from 'react-use';
import { guid } from 'shared-base';
import { prompt, toast } from '@gdi/ui';

const reducers = combineReducer(generateReducersForStore<LocalStore>(data.localStore));
const actions = generateActionsForStore<LocalStore>(data.localStore);

export const useActivities = () => {
  // useReducer
  const [savedState, setSavedState] = useLocalStorage('saved_state', data.localStore);
  const [state, dispatch] = useReducer(reducers, savedState || data.localStore) as [
    LocalStore,
    any
  ];

  const saveCurrentSession = useCallback(() => {
    const { sessionId, start, activityId } = state.localState;

    if (!sessionId) {
      return;
    }

    const end = Date.now();
    const duration = end - start;

    if (duration < 60 * 1000) {
      return;
    }

    dispatch(
      actions.sessions.set(sessionId, {
        id: sessionId,
        activityId,
        start,
        end,
        duration,
      })
    );
  }, [state]);

  const startNewSession = useCallback(
    (activityId: string) => {
      saveCurrentSession();

      const sessionId = guid();
      const start = Date.now();

      dispatch(
        actions.localState.patch({
          sessionId,
          start,
          activityId,
        })
      );
    },
    [state]
  );

  useMount(() => {
    if (state.localState.start) {
      return;
    }

    startNewSession('0');
  });

  const time = useTime();

  const currentSession: ISession | null = useMemo(() => {
    const { activityId, start, sessionId } = state.localState;

    if (!activityId) {
      return null;
    }

    return {
      id: sessionId,
      activityId,
      start,
      end: 0,
      duration: time - start,
    };
  }, [state, time]);

  useEffect(() => {
    setSavedState(state);
  }, [state]);

  const callbacks = useMemo(
    () => ({
      onActivityChange: (activityId: string) => {
        startNewSession(activityId);
      },
      onDesiredChange: (activityId: string, desiredMinutes: number) => {
        dispatch(
          actions.activities.patch(activityId, {
            todayDesired: minutesToTimeText(desiredMinutes),
          })
        );
      },
      onDeleteSession: (sessionId: string) => {
        dispatch(actions.sessions.delete(sessionId));
      },
      onChangeSession: async (sessionId: string, activityName: string) => {
        const { didCancel, value } = await prompt.input({
          title: 'Change session',
          ctaButtonText: 'Change',
          defaultValue: activityName,
        });

        if (didCancel) {
          return;
        }

        const activity = Object.values(state.activities).find((i) => i.name === value);

        if (!activity) {
          toast.show(`Activity ${value} not found`, 'error');
          return;
        }

        dispatch(actions.sessions.patch(sessionId, { activityId: activity.id }));
      },
    }),
    [state]
  );

  return {
    state,
    callbacks,
    currentSession,
  };
};

export const useTime = () => {
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 190);

    return () => clearInterval(interval);
  }, []);

  return now;
};
