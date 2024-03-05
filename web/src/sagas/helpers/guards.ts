import { selectors } from '@gdi/store-base';
import { toast } from '@gdi/ui';
import { select } from 'saga-ts';
import { invokeEvent } from 'shared-base';

export function* keysGuard(showSetup?: boolean) {
  const isApiKeyOk = yield* select(selectors.base.$isApiKeyOk);

  if (isApiKeyOk) {
    return true;
  }

  if (showSetup) {
    invokeEvent('gdi/setup');
  }

  return false;
}

export function* boardGuard() {
  const regex = /\/boards\/B-(.*)/g;

  const { pathname } = window.location;
  const match = regex.exec(pathname);

  if (!match) {
    toast.show('Can only send prompt to boards that have flows', 'error');
    return false;
  }

  return true;
}
