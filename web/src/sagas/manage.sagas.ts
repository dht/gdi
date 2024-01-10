import { cancel, fork, put, takeEvery } from 'saga-ts';
import { customEvenChannel } from './channels/channel.customEvent';
import { actions } from '@gdi/store-base';
import { allSagas } from './saga.index';
import config from './manage.sagas.json';
import { invokeEvent } from 'shared-base';

const tasks: any = {};

export function* start(ev: any) {
  try {
    const { data } = ev;
    const { id } = data;

    const saga = allSagas[id];

    const task = tasks[id];

    if (!saga || task) {
      return;
    }

    // console.log(`Starting ${id}...`);
    tasks[id] = yield* fork(saga.root);

    yield put(
      actions.sagas.patch(id, {
        tsStart: Date.now(),
        isRunning: true,
      })
    );
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'manage.saga.ts',
      method: 'start',
      err,
    });
  }
}

export function* stop(ev: any) {
  try {
    const { data } = ev;
    const { id } = data;

    const task = tasks[id];

    if (!task) {
      return;
    }

    yield* cancel(task);
    delete tasks[id];
    // console.log(`Stopping ${id}...`);

    yield put(
      actions.sagas.patch(id, {
        tsStop: Date.now(),
        isRunning: false,
      })
    );
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'manage.saga.ts',
      method: 'stop',
      err,
    });
  }
}

export function* bootstrap() {
  try {
    for (let id of config.bootstrap) {
      invokeEvent('sagas/start', { id });
    }
  } catch (err) {
    invokeEvent('saga/error', {
      file: 'manage.saga.ts',
      method: 'bootstrap',
      err,
    });
  }
}

export function* root() {
  let channel;

  channel = customEvenChannel('sagas/start');
  yield takeEvery(channel, start);

  channel = customEvenChannel('sagas/stop');
  yield takeEvery(channel, stop);

  yield* fork(bootstrap);
}
