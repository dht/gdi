import { ISaga } from '@gdi/store-base';
import { UsageOptions, prompt } from '@gdi/ui';
import { delay } from 'saga-ts';
import { takeEvery } from 'typed-redux-saga';
import { customEvenChannel } from './channels/channel.customEvent';
import { invokeEvent } from 'shared-base';

export function* onSetup() {
  const { value, didCancel } = yield prompt.custom({
    title: 'Usage Options',
    component: UsageOptions,
    componentProps: {},
  });

  if (didCancel || !value) {
    return;
  }

  invokeEvent('saveKeys', {
    openAI: value,
  });
}

export function* root() {
  yield delay(0);

  let channel;

  channel = customEvenChannel('gdi/setup');
  yield* takeEvery(channel, onSetup);
}

export const saga: ISaga = {
  id: 'gdi.setup',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['gdi/setup'],
  },
};
