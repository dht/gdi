import { mapValues } from 'lodash';
import { Json } from '../../types';
import { IFile } from '../upload';
import { base64ToJson, jsonToBase64 } from './files._utils';

export const findAsset = (fileName: string, assets: any) => {
  return Object.values(assets).find((asset: any) => {
    return asset.fileName === fileName;
  });
};

export const prepareFile = (fileInfo: IFile, meta: Json) => {
  const { name, size, type, base64 } = fileInfo;
  const { assets } = meta;

  const json = base64ToJson(base64);

  const output = { ...json };
  const { sceneBits, sceneAudios } = json;

  output.sceneBits = mapValues(sceneBits, (bit: any) => {
    const { fileName } = bit;

    const asset: any = findAsset(fileName, assets);

    if (asset) {
      bit.attachmentUrl = asset.assetUrl;
    }

    return {
      ...bit,
    };
  });

  output.sceneAudios = mapValues(sceneAudios, (audio: any) => {
    const { fileName } = audio;

    const asset: any = findAsset(fileName, assets);

    if (asset) {
      audio.url = asset.assetUrl;
    }

    return {
      ...audio,
    };
  });

  return {
    name,
    size,
    type,
    base64: jsonToBase64(output),
    forceContentType: 'clip',
  };
};
