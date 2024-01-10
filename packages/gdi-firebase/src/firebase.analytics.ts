import { analytics } from './firebase';
import {
  setUserProperties as _setUserProperties,
  setUserId as _setUserId,
  logEvent as _logEvent,
  EventParams,
} from 'firebase/analytics';

let enabled = false;

export const enableAnalytics = (value: boolean) => {
  enabled = value;
};

export const setUserProperties = (userProps: Json) => {
  if (!enabled) {
    return;
  }

  _setUserProperties(analytics, userProps);
};

export const setUserId = (userId: string) => {
  if (!enabled) {
    return;
  }

  _setUserId(analytics, userId);
};

export const logEvent = (eventName: string, eventParams?: Partial<EventParams>) => {
  if (!enabled) {
    return;
  }

  _logEvent(analytics, eventName, eventParams);
};
