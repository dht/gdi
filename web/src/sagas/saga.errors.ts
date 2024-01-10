import { takeEvery } from 'typed-redux-saga';
import { customEvenChannel } from './channels/channel.customEvent';
import { invokeEvent } from 'shared-base';
import { toast } from '@gdi/ui';

export function* onFunctionError(ev: any) {
  const { data } = ev;
  const { path, error } = data;

  toast.show(`Error calling "${path}"`, 'error');
}

export function* onSagaError(ev: any) {
  const { data } = ev;
  const { file, method } = data;

  toast.show(`Error calling "${file}/${method}"`, 'error');
}

export function* onGeneralError(ev: any) {
  const { data } = ev;
  const { message, source, lineno, colno, error } = data;

  toast.show(`General error "${message}"`, 'error');
}

export function* root() {
  let channel;

  channel = customEvenChannel('function/error');
  yield takeEvery(channel, onFunctionError);

  channel = customEvenChannel('general/error');
  yield takeEvery(channel, onGeneralError);

  channel = customEvenChannel('saga/error');
  yield takeEvery(channel, onSagaError);

  window.onerror = function (message, source, lineno, colno, error) {
    invokeEvent('general/error', { message, source, lineno, colno, error });
  };
}

export const saga = {
  id: 'gdi.errors',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['function/error'],
  },
};
