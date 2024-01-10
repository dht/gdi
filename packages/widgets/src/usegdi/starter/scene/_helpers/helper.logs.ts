import { addListener, invokeEvent } from 'shared-base';
import { setLogMethod } from 'isokit2';

let enabled = false,
  time = 0,
  index = 1;

export const log = (scope: string, text: string, data?: Json, iconName?: string) => {
  if (!enabled) {
    return;
  }

  let message = text;

  if (data?.duration) {
    const { duration } = data ?? {};
    const durationString = `(${duration.toFixed(2)}s)`;
    message += ' ' + durationString;
  }

  invokeEvent('player/log', { index, ts: time, scope, message, data, iconName });
  index++;
};

export const clearLog = () => {
  if (!enabled) {
    return;
  }

  time = 0;
  index = 1;

  invokeEvent('player/clearLog');
};

let unlisten: any;

export const startLogListeners = () => {
  if (!enabled) {
    return;
  }
  if (unlisten) {
    unlisten();
  }

  unlisten = addListener('waveform/timeupdate', (ev) => {
    const { currentTime } = ev;
    time = currentTime;
  });
};

export const initLog = () => {
  enabled = true;
  startLogListeners();
  setLogMethod(log);
};
