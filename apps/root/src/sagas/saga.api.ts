import { runFunction } from '@gdi/firebase';
import { actions, auth, selectors } from '@gdi/store-base';
import { initSfx } from '@gdi/ui';
import { call, delay, fork, put, select } from 'saga-ts';
import { invokeEvent } from 'shared-base';

function* api() {}

export function* root() {}

export const saga = {
  id: 'root.api',
  type: 'api',
  root: root,
};
