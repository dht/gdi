import { showMouth } from 'isokit2';
import { delay, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';
import { mouthShapesMap } from '../utils/utils.phonetics';

export function* onSpeech(ev: any) {
  const { data } = ev;
  const { speech } = data;
  const { speakerName, textPhonetics, duration = 2 } = speech;

  const mouthShapes = textPhonetics
    .split('')
    .map((char: string) => (mouthShapesMap as any)[char])
    .filter((mouthShape: any) => mouthShape && mouthShape !== 'none');

  const delayMillis = duration / mouthShapes.length;
  const characterId = speakerName === 'Mary' ? 'woman' : 'man';

  for (let i = 0; i < mouthShapes.length; i++) {
    showMouth(characterId, mouthShapes[i]);
    yield delay(delayMillis);
  }

  yield delay(88);
  showMouth(characterId, 'bmp');
}

export function* root() {
  let channel;

  channel = customEvenChannel('clip/speech');
  yield takeEvery(channel, onSpeech);
}

export const saga = {
  id: 'widgets.player.characters',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['clip/speech'],
  },
};
