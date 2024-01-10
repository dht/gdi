import { prompt, toast } from '@gdi/ui';
import { get, set, isEmpty } from 'lodash';
import { call } from 'saga-ts';
import { guid4 } from 'shared-base';
import AssetPickerContainer from '../../asset-picker/AssetPicker.container';
import { parseJson } from '../../new-element/NewElement.utils';

export function* guid(_a: any, value: string) {
  return value.replace('{uid4}', guid4());
}

export function* asset(contentType: string) {
  const { value, didCancel } = yield prompt.custom({
    title: 'Select an asset',
    component: AssetPickerContainer,
    componentProps: {
      contentType,
    },
    darkMode: true,
  });

  if (didCancel || !value) {
    return;
  }

  return get(value, 'assetUrl');
}

export const parsers = {
  '{uid4}': guid,
  '{asset-audio}': asset,
  '{asset-image}': asset,
  '{asset-3d}': asset,
};

export const map: any = {
  '{asset-audio}': 'audio',
  '{asset-image}': 'image',
  '{asset-3d}': '3d',
};

const extraXPaths = ['values.heightMap'];

export function* bakeJson(jsonRaw: string) {
  let json = parseJson(jsonRaw, {}),
    isSuccess = true;

  if (isEmpty(json)) {
    toast.show('Invalid JSON', 'error');
  }

  const xPaths = [...Object.keys(json), ...extraXPaths];

  for (let xPath of xPaths) {
    const value = get(json, xPath);

    if (typeof value !== 'string') {
      continue;
    }

    const regex = /\{(.*?)\}/g;

    const matches = value.match(regex);
    const match = matches && matches[0];

    const parser = (parsers as any)[match ?? ''];

    if (!parser) {
      continue;
    }

    const newValue = yield* call(parser, map[value], value);

    if (!newValue) {
      isSuccess = false;
    }

    set(json, xPath, newValue);
  }

  return { json, isSuccess };
}
