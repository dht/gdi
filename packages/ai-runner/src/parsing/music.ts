import { get } from 'lodash';
import { arrayToObject } from '../utils/object';

const schema = {
  id: 'id',
  name: 'name',
  author: 'author_username',
  authorUrl: 'author_url',
  url: 'url',
  sales: 'number_of_sales',
  iconUrl: 'previews.icon_with_audio_preview.icon_url',
  previewMp3Url: 'previews.icon_with_audio_preview.mp3_url',
  waveFormUrl: 'previews.icon_with_audio_preview.mp3_preview_waveform_url',
};

const applySchema = (item: Json, schema: Json) => {
  const result: Json = {};

  for (const key in schema) {
    result[key] = get(item, schema[key]);
  }

  return result;
};

export type MarketDomain =
  | 'themeforest.net'
  | 'codecanyon.net'
  | 'videohive.net'
  | 'audiojungle.net'
  | 'graphicriver.net'
  | 'photodune.net'
  | '3docean.net';

const mapType: Record<MarketDomain, string> = {
  'themeforest.net': 'theme',
  'codecanyon.net': 'plugin',
  'videohive.net': 'video',
  'audiojungle.net': 'audio',
  'graphicriver.net': 'graphic',
  'photodune.net': 'photo',
  '3docean.net': '3d',
};

export const parseEnvatoItems = (items: Json[], extra: Json = {}) => {
  const arr = items.map((item) => {
    const innerItem = item.item || item;
    const json = applySchema(innerItem, schema);
    const { url } = json;
    const domain = url.split('/')[2];
    const fileType = mapType[domain as MarketDomain];

    return { ...json, fileType, ...extra };
  });

  return arrayToObject(arr, 'id');
};
