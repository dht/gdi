import { selectors } from '@gdi/store-base';
import { GdiIntro, OnBoarding, prompt } from '@gdi/ui';
import { delay, fork, select } from 'saga-ts';
import { getBoolean, setBoolean } from 'shared-base';

export function* showOnboarding() {
  const isPlayback = document.location.hash.length > 0;
  const wasOnboardSeen = getBoolean('onboardingSeen');
  const appState = yield* select(selectors.raw.$rawAppState);
  const { docsRootUrl } = appState;

  if (isPlayback || wasOnboardSeen) {
    // return;
  }

  yield delay(3000);
  setBoolean('onboardingSeen', true);

  yield prompt.custom({
    title: 'GDI Intro',
    component: GdiIntro,
    componentProps: {},
  });

  yield delay(200);

  yield prompt.custom({
    title: 'Onboarding',
    component: OnBoarding,
    componentProps: {
      rootUrl: docsRootUrl + '/on-boarding',
    },
  });
}

export function* root() {
  yield delay(0);

  yield* fork(showOnboarding);
}

export const saga = {
  id: 'gdi.onboarding',
  type: 'bootstrap',
  root: root,
  trigger: {},
};
