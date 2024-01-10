import { IShortKey, shortKeysMatch } from '@gdi/ui';
import { eventChannel } from 'redux-saga';

export function createKeysChannels(shortKeys: IShortKey[]) {
  return eventChannel((emit) => {
    const handler = (event: any) => {
      const relevantItem = shortKeys.find((item) => shortKeysMatch(event, [item]));

      if (relevantItem) {
        emit(relevantItem);
      }
    };

    window.addEventListener('keydown', handler);

    const unsubscribe = () => {
      window.removeEventListener('keydown', handler);
    };

    return unsubscribe;
  });
}
