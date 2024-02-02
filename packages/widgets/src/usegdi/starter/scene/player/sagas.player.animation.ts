import { actions, selectors } from '@gdi/store-iso';
import { animateItem, setCamera, showMeshes, stopAllAnimations } from 'isokit2';
import { fork, put, select, takeEvery } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import { customEvenChannelThrottled } from '../../../../helpers/channels/channel.customEvent';
import { loadSpecialBit } from '../_helpers/helper.layers';
import { clearLog, initLog, log } from '../_helpers/helper.logs';
import { dotsToAnimation } from '../utils/utils.animation';
import { preloadNextBit } from './sagas.player.preloadImages';

const DEBUG = true;

if (DEBUG) {
  initLog();
}

export let playedBits: Json = {};

export function* clearPlayedBits() {
  clearLog();

  const bits = yield* select(selectors.base.$bits);

  // log('bit', 'clearedPlayedBits', bits);
  playedBits = {};
}

export function* onCheckAnimation(ev: any) {
  const { data } = ev;
  const { currentTime } = data;

  const bit = yield* select(selectors.animation.$bitForAnimation, currentTime);
  const config = yield* select(selectors.raw.$rawSceneConfig);

  if (!bit || playedBits[bit.id]) {
    return;
  }

  const { id: bitId, elements, duration, type, attachmentUrl } = bit;
  yield fork(preloadNextBit, bitId);

  if (type === 'layer') {
    yield fork(loadSpecialBit, bit);
  }

  invokeEvent('log/bit', { bit });

  // log(`${bitId}`, `identified`, { elements, duration });

  if (!config.isCharacterScene) {
    stopAllAnimations();
  }

  playedBits[bitId] = true;

  log('patchCurrentIds #5', `bitId: ${bitId}`);
  yield put(actions.sceneCurrentIds.patch({ bitId }));

  showMeshes(elements, true);

  const { cameraId } = bit;

  setCamera(cameraId);
  // log(`${cameraId}`, `camera change`, elements, 'videocam');

  const dots = yield* select(selectors.animation.$dotsForBit, bit.id);

  const animations: any = dotsToAnimation(dots, bit.id, bit.duration!);
  const count = animations.length;

  log(`${count} animations`, `found`, animations);

  for (let animation of animations) {
    const { id } = animation;
    const options = {};

    animateItem(id, animation, options);
  }
}

export function* root() {
  let channel;

  channel = customEvenChannelThrottled('waveform/timeupdate', 90);
  yield takeEvery(channel, onCheckAnimation);
}

export const saga = {
  id: 'widgets.player.animation',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['waveform/timeupdate'],
  },
};
