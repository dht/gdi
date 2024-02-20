import { runFunction } from '@gdi/firebase';
import { actions, auth, selectors } from '@gdi/store-base';
import { initSfx } from '@gdi/ui';
import { call, delay, fork, put, select } from 'saga-ts';
import { invokeEvent } from 'shared-base';

function* village() {}

export function* root() {}

export const saga = {
  id: 'root.village',
  type: 'api',
  root: root,
};
