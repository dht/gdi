import { selectors } from '@gdi/store-base';
import { GdiIntro, OnBoarding, prompt } from '@gdi/ui';
import { delay, fork, select } from 'saga-ts';
import { getBoolean, invokeEvent, setBoolean } from 'shared-base';

export function* showLandingPage() {
  const wasLandingPageSeen = getBoolean('landingPageSeen');

  if (wasLandingPageSeen) {
    return;
  }

  yield delay(100);

  invokeEvent('nav', { path: '/landing' });
  setBoolean('landingPageSeen', true);
}

export function* showOnboarding() {
  const isPlayback = document.location.hash.length > 0;
  const wasLandingPageSeen = getBoolean('landingPageSeen');
  const wasOnboardSeen = getBoolean('onBoardingSeen');
  const appState = yield* select(selectors.raw.$rawAppState);
  const { docsRootUrl } = appState;

  if (isPlayback || wasOnboardSeen || !wasLandingPageSeen) {
    return;
  }

  yield delay(3000);
  setBoolean('onBoardingSeen', true);

  yield prompt.custom({
    title: 'GDI Intro',
    component: GdiIntro,
    componentProps: {},
  });

  yield delay(200);

  yield prompt.custom({
    title: 'Welcome to GDI',
    component: OnBoarding,
    componentProps: {
      rootUrl: docsRootUrl + '/on-boarding',
    },
  });
}

export function* root() {
  yield delay(0);

  yield* fork(showLandingPage);
  yield* fork(showOnboarding);
}

export const saga = {
  id: 'gdi.onboarding',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
