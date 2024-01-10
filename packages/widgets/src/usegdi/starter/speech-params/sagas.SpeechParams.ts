import { prompt } from '@gdi/ui';
import axios from 'axios';
import { get } from 'lodash';
import { call, takeEvery } from 'saga-ts';
import { invokeEvent } from 'shared-base';
import AssetPickerContainer from '../asset-picker/AssetPicker.container';

export function* getAsset() {
  const { value, didCancel } = yield prompt.custom({
    title: 'Select an asset',
    component: AssetPickerContainer,
    componentProps: {
      contentType: 'txt',
    },
  });

  if (didCancel || !value) {
    return;
  }

  const url = get(value, 'assetUrl');

  const response: any = yield* call(axios.get, url);

  invokeEvent('asset/import', { data: response.data });
}

export function* root() {
  yield takeEvery('GET_ASSET', getAsset);
}

export const saga = {
  id: 'widgets.speechParams',
  type: 'component',
  root: root,
  trigger: {
    actionTypes: ['GET_ASSET'],
  },
};
