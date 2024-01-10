import { IBit, actions, selectors, IAudio } from '@gdi/store-iso';
import { playSound, prompt, toast } from '@gdi/ui';
import { Json } from 'redux-store-generator';
import { call, delay, fork, put, select, takeLatest } from 'saga-ts';
import AssetPickerContainer from '../../asset-picker/AssetPicker.container';
import { guid4 } from 'shared-base';
import { getAudio } from '../_helpers/helper.assets';

type Verb =
  | 'changeMusic' //
  | 'changeAudio'
  | 'addAudio'
  | 'moveAudio'
  | 'deleteAudio'
  | 'focusAudio';

type Action = {
  type: 'AUDIO';
  verb: Verb;
  id: string;
  payload: Json;
};

const map: Record<Verb, any> = {
  changeMusic: changeMusic,
  changeAudio: changeAudio,
  addAudio: addAudio,
  moveAudio: moveAudio,
  deleteAudio: deleteAudio,
  focusAudio: focusAudio,
};

export function* changeMusic(action: Action) {
  const { value, didCancel } = yield prompt.custom({
    title: 'Select an asset',
    component: AssetPickerContainer,
    componentProps: {
      contentType: 'audio',
    },
    darkMode: true,
  });

  if (didCancel || !value) {
    return;
  }

  const { assetUrl } = value;

  yield put(actions.sceneState.patch({ isAudioReady: false }));

  const audio = yield* select(selectors.singles.$audio, 'main');

  if (!audio) {
    toast.show('No main audio found', 'error');
    return;
  }

  yield delay(100);
  yield put(actions.sceneAudios.patch('main', { url: assetUrl }));
  yield put(actions.sceneState.patch({ isAudioReady: true }));
}

export function* changeAudio(action: Action, audio: IAudio) {
  const { value, didCancel } = yield prompt.custom({
    title: 'Select an asset',
    component: AssetPickerContainer,
    componentProps: {
      contentType: 'audio',
    },
    darkMode: true,
  });

  if (didCancel || !value) {
    return;
  }

  const { assetUrl } = value;

  yield put(actions.sceneState.patch({ isAudioReady: false }));
  yield delay(100);
  yield put(actions.sceneState.patch({ isAudioReady: true }));
}

export function* addAudio(action: Action, audio: IAudio) {
  const { payload } = action;
  const { percent } = payload;
  const totalTime = yield* select(selectors.base.$totalTime);

  const url: string = yield call(getAudio);

  if (!url) {
    return;
  }

  const item: IAudio = {
    id: guid4(),
    timestamp: percent * totalTime,
    url,
    duration: 0,
  };

  yield put(actions.sceneAudios.add(item));
}

export function* focusAudio(action: Action, audio: IAudio) {
  const { id } = action;
  const { url } = audio;
  yield put(actions.sceneCurrentIds.patch({ audioId: id }));

  if (!url) {
    return;
  }

  playSound(url);
}

export function* moveAudio(action: Action, audio: IAudio) {
  const { id, payload } = action;
  const { percent } = payload;

  const totalTime = yield* select(selectors.base.$totalTime);

  const timestamp = percent * totalTime;

  yield put(
    actions.sceneAudios.patch(id, {
      timestamp,
    })
  );
}

export function* deleteAudio(action: Action, audio: IAudio) {
  const { id } = action;

  yield put(actions.sceneAudios.delete(id));
}

export function* _audio(action: any) {
  const { verb } = action;

  const saga = (map as any)[verb];

  if (!saga) {
    return;
  }

  const audio = yield* select(selectors.singles.$audio, action.id);

  yield* fork(saga, action, audio);
}

export function* root() {
  yield takeLatest('AUDIO', _audio);
}

export const saga = {
  id: 'widgets.clip.audio',
  type: 'entity',
  root: root,
  trigger: {
    actionTypes: ['AUDIO'],
  },
};
