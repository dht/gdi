import { startLocalInstance } from '@gdi/ai-runner';
import { preRun } from './start.prerun';

export type StartParams = {};

export const main = () => {
  const params = preRun();

  if (!params.isOk) {
    return;
  }

  startLocalInstance(params as any);
};
