import { signInAnonymously } from '@gdi/firebase';
import { call } from 'saga-ts';

export function* anonymous() {
  try {
    yield* call(signInAnonymously);
  } catch (err: any) {
    console.log('err =>', err);
  }
}
