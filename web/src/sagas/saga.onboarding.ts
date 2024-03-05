import { selectors } from '@gdi/store-base';
import { GdiIntro, prompt } from '@gdi/ui';
import { delay, fork, select } from 'saga-ts';
import { getBoolean, setBoolean } from 'shared-base';

export function* showLandingPage() {
  const wasLandingPageSeen = getBoolean('landingPageSeen');

  if (wasLandingPageSeen) {
    return;
  }

  yield delay(100);

  document.location = '/landing';
  setBoolean('landingPageSeen', true);
}

export function* showOnboarding() {
  const isPlayback = document.location.hash.length > 0;
  const wasLandingPageSeen = getBoolean('landingPageSeen');
  const wasOnboardSeen = getBoolean('onBoardingSeen');

  if (isPlayback || wasOnboardSeen || !wasLandingPageSeen) {
    return;
  }

  yield delay(3000);
  setBoolean('onBoardingSeen', true);

  yield prompt.custom({
    title: 'Welcome to GDI',
    component: GdiIntro,
    componentProps: {},
  });
}

export function* root() {
  yield* fork(showLandingPage);
  yield* fork(showOnboarding);
}

export const saga = {
  id: 'gdi.onboarding',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
