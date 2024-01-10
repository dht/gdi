import { actions, selectors } from '@gdi/store-base';
import { toast, playSound, stopSound } from '@gdi/ui';
import { moveTorus } from 'isokit2';
import { call, cancel, delay, fork, put, select, takeEvery, takeLatest } from '../../../helpers';

let scene: any, task: any;

export function* startAnimation() {
  const transcript = yield* select(selectors.base.$transcriptForAnimation);

  // yield call(playAmbience, 'modelz', 'http://localhost:3001/sounds/modelz.mp3');

  let index = 0;

  for (let item of transcript) {
    yield call(talk, item!, index);
    yield delay(500);
    index++;
  }

  yield delay(1000);

  toast.show("That's all folks!");

  yield call(wrapUp);
}

function* talk(item: Json, index: number) {
  const { sentence, audioUrl, characterId } = item;

  const response = yield* call(playSound, audioUrl);

  yield put(
    actions.appState.patch({
      lineIndex: index,
    })
  );

  const { audio, duration } = response;

  audio.play();
}

type ActionSpeech = {
  type: 'BABYLON_LOADED';
  scene: any;
  debugBabylon?: boolean;
};

export function* sceneLoaded(action: ActionSpeech) {
  yield call(startAnimation);

  scene = action.scene;

  if (action.debugBabylon) {
    scene.debugLayer.show();
  }
}

type ActionPlay = {
  type: 'PLAY';
};

export function* wrapUp() {
  // yield call(stopAmbience, 'modelz');

  yield put(
    actions.appState.patch({
      flavour: 'default',
    })
  );

  yield put(
    actions.playbackState.patch({
      playbackStatus: 'idle',
      startTime: Date.now(),
    })
  );

  yield put(
    actions.camera.patch({
      radius: 25,
      alpha: 1,
      beta: 1,
      target: { x: 0, y: 0, z: 0 },
    })
  );
}

export function* play(action: ActionPlay) {
  return;
  toast.show('Starting playback');

  yield put(
    actions.appState.patch({
      flavour: 'outcome',
    })
  );

  yield put(
    actions.playbackState.patch({
      playbackStatus: 'playing',
      startTime: Date.now(),
    })
  );

  yield put(
    actions.camera.patch({
      radius: 6,
      alpha: 1,
      beta: 1,
      target: { x: -5, y: 1, z: 10 },
    })
  );
}

export function* start() {
  task = yield* fork(startAnimation);
}

export function* stop() {
  stopSound();
  yield* cancel(task as any);
  yield fork(wrapUp);
}

export function* root() {
  yield takeEvery('PRODUCT_TOUR_LOADED', sceneLoaded);
  yield takeLatest('PLAY_TOUR', start);
  yield takeLatest('PLAY_TOUR', play);
  yield takeEvery('STOP', stop);
}

export const saga = {
  id: 'widgets.productTour',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['PRODUCT_TOUR_LOADED', 'PLAY_TOUR', 'STOP'],
  },
};
