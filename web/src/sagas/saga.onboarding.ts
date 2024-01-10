import { GdiIntro, prompt } from '@gdi/ui';
import { delay, fork } from 'saga-ts';
import { getBoolean, setBoolean } from 'shared-base';

export function* showOnboarding() {
  const isPlayback = document.location.hash.length > 0;
  const wasOnboardSeen = getBoolean('onboardingSeen');

  if (isPlayback || wasOnboardSeen) {
    return;
  }

  yield delay(3000);
  setBoolean('onboardingSeen', true);

  const { didCancel } = yield prompt.custom({
    title: 'GDI Intro',
    component: GdiIntro,
    componentProps: {},
  });

  if (didCancel) {
    return;
  }
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
