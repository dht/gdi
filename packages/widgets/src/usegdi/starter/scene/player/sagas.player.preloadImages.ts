import { selectors } from '@gdi/store-iso';
import { select, takeEvery } from 'saga-ts';
import { customEvenChannel } from '../../../../helpers/channels/channel.customEvent';

let cached: any = {};

export function* onPlay() {
  const bits = yield* select(selectors.raw.$rawSceneBits);

  const urls = Object.values(bits)
    .map((bit: any) => bit.attachmentUrl)
    .filter((url) => url)
    .filter((url) => {
      return ['.png', '.jpg', '.jpeg', '.gif'].find((ext) => url.includes(ext));
    })
    .filter((url) => !cached[url]);

  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
    cached[url] = true;
  });
}

export function* root() {
  let channel;

  channel = customEvenChannel('waveform/play');
  yield takeEvery(channel, onPlay);
}

export const saga = {
  id: 'widgets.player.preloadImages',
  type: 'customEvent',
  root: root,
  trigger: {
    eventNames: ['waveform/timeupdate'],
  },
};
