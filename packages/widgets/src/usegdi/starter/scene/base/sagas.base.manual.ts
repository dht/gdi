import { call, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import { prompt } from '@gdi/ui';
import { positionElement } from 'isokit2';

const map: any = {
  x: 'position.x',
  y: 'position.y',
  z: 'position.z',
  rx: 'rotation.x',
  ry: 'rotation.y',
  rz: 'rotation.z',
  alpha: 'alpha',
  beta: 'beta',
  radius: 'radius',
};

export function* onManual(ev: any) {
  const { data } = ev;
  const { id, key, value } = data;

  const { value: newValue, didCancel } = yield prompt.input({
    title: `Value for ${key}`,
    placeholder: 'Enter a value or a vector',
    ctaButtonText: 'Set',
    defaultValue: value,
    darkMode: true,
  });

  if (didCancel || !newValue) {
    return;
  }

  const path = map[key];

  positionElement(id, {
    [path]: newValue,
  });
}

export function* root() {
  let channel;

  channel = customEvenChannel('set/pos');
  yield takeEvery(channel, onManual);
}

export const saga = {
  id: 'widgets.3d.manual',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['set/pos'],
  },
};
