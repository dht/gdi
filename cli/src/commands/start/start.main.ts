import { startLocalInstance } from '@gdi/ai-runner';
import { preRun } from './start.prerun';

export type StartParams = {};

export const main = () => {
  const params = preRun();

  if (!params.isOk) {
    return;
  }

  // console.log('startLocalInstance =>', startLocalInstance);

  // startLocalInstance(params);
};
