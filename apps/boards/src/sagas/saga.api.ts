import { delay, fork } from 'saga-ts';

function* api() {
  // const promises = [

  // ];

  // yield Promise.all(promises);

  yield delay(100);
}

export function* root() {
  yield delay(300);
  yield* fork(api);
}

export const saga = {
  id: 'boards.api',
  type: 'api',
  root: root,
};
