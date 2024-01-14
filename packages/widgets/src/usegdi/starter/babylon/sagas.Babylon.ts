import { actions, selectors } from '@gdi/store-base';
import { actions as actionsIso, selectors as selectorsIso } from '@gdi/store-iso';
import { playAmbience, playSound, stopAmbience, stopSound, toast } from '@gdi/ui';
import {
  addElements,
  applyConfig,
  changeMouth,
  createSpeakingStone,
  moveArc,
  moveSpeakingStone,
} from 'isokit2';
import { call, cancel, delay, fork, put, select, takeEvery, takeLatest } from 'saga-ts';
import { customEvenChannel } from '../../../helpers/channels/channel.customEvent';
import { DataItem, mouthShapesBackMap, mouthShapesMap } from '../babylon/utils/phonetics';

let task: any;

export function* startAnimation() {
  const transcript = yield* select(selectors.base.$transcriptForAnimation);
  const appState = yield* select(selectors.raw.$rawAppState);
  const { boardsRootUrl } = appState;

  yield call(playAmbience, 'park1', `${boardsRootUrl}/B-004/assets/park-1.mp3`);
  yield call(playAmbience, 'park2', `${boardsRootUrl}/B-004/assets/park-2.mp3`);

  let index = 0;

  yield put(actions.appState.patch({ flavour: 'outcome' }));
  yield put(actions.playbackState.patch({ playbackStatus: 'playing', startTime: Date.now() }));

  moveArc(
    {
      radius: 6,
      alpha: 180 / Math.PI,
      beta: 180 / Math.PI,
      target: [-5, 1, 10],
    },
    true
  );

  for (let item of transcript) {
    yield* call(talk, item!, index);
    yield delay(500);
    index++;
  }

  yield delay(1000);

  toast.show("That's all folks!");

  yield call(wrapUp);
}

function* talk(item: DataItem, index: number) {
  const { sentence, audioUrl, characterId } = item;

  const response = yield* call(playSound, audioUrl);

  yield put(
    actions.appState.patch({
      lineIndex: index,
    })
  );

  const { audio, duration } = response;

  moveSpeakingStone(characterId);
  audio.play();

  const mouthShapeMap = item.isBack ? mouthShapesBackMap : mouthShapesMap;

  const mouthShapes = sentence
    .split('')
    .map((char) => (mouthShapeMap as any)[char])
    .filter((mouthShape) => mouthShape && mouthShape !== 'none');

  const shapesCount = mouthShapes.length;
  const interval = duration / (shapesCount + 4);

  for (let mouthShape of mouthShapes) {
    changeMouth(characterId, mouthShape);
    yield delay(interval);
  }

  changeMouth(characterId, item.isBack ? 'n' : 'mbp');
}

type ActionSpeech = {
  type: 'BABYLON_LOADED';
  scene: any;
  debugBabylon?: boolean;
};

type ActionPlay = {
  type: 'PLAY';
};

export function* wrapUp() {
  yield call(stopAmbience, 'park1');
  yield call(stopAmbience, 'park2');

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

  moveArc(
    {
      radius: 25,
      alpha: 180 / Math.PI,
      beta: 180 / Math.PI,
      target: { x: 0, y: 0, z: 0 },
    },
    true
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

export function* sceneBootstrap(action: any) {
  const sceneConfig = yield* select(selectorsIso.raw.$rawSceneConfig);
  const elements = yield* select(selectorsIso.base.$elements);

  applyConfig(sceneConfig);
  addElements(elements);
  createSpeakingStone();
}

export function* root() {
  yield takeEvery('BABYLON_BOOTSTRAP', sceneBootstrap);
  yield takeLatest('PLAY', start);
  yield takeEvery('STOP', stop);

  const channel = customEvenChannel('board/exit');
  yield takeEvery(channel, stop);
}

export const saga = {
  id: 'widgets.babylon',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['BABYLON_LOADED', 'PLAY', 'STOP'],
    eventNames: ['board/exit'],
  },
};
