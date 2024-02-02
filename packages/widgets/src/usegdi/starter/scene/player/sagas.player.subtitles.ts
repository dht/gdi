import { changeSubtitles } from 'isokit2';
import { takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';

export function* onSpeech(ev: any) {
  const { data } = ev;
  const { speech } = data;
  let { text } = speech;

  if (text.length > 30) {
    let brkIndex = Math.max(Math.floor(text.length / 2), 30);
    // find the first space after 20 characters
    const spaceIndex = text.indexOf(' ', brkIndex);

    if (spaceIndex > 0) {
      text = text.slice(0, spaceIndex) + '\n' + text.slice(spaceIndex + 1);
    }
  }

  changeSubtitles(text);
}

export function* root() {
  let channel;

  channel = customEvenChannel('clip/speech');
  yield takeEvery(channel, onSpeech);
}

export const saga = {
  id: 'widgets.player.subtitles',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['clip/speech'],
  },
};
