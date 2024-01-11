import { IFile } from '../upload';
import { jsonToBase64 } from './files._utils';

export const clip = {
  sceneBits: {
    b07: {
      cameraId: 'arc',
      elements: {
        car: true,
        g1: false,
      },
      name: 'Hud',
      id: 'b07',
      timestamp: 28.319,
      attachmentUrl: 'http://',
      attachmentFilename: 'hud.json',
      type: 'layer',
      index: 6,
    },
    b08: {
      attachmentUrl: 'http://',
      attachmentFilename: 's6.png',
      cameraId: 'free',
      elements: {
        car: true,
      },
      name: 'Rise to sky',
      id: 'b08',
      type: 'skybox',
      timestamp: 38.523,
      index: 7,
    },
  },
  sceneAudios: {
    'audio-main': {
      duration: 0,
      isMain: true,
      id: 'audio-main',
      url: 'http://',
      timestamp: 0,
      attachmentFilename: 'modelZ.mp3',
    },
    'audio-1': {
      duration: 0,
      id: 'audio-1',
      url: 'http://',
      timestamp: 8.877652727817749,
      attachmentFilename: 'v-01.mp3',
    },
  },
};

export const fileInfo: IFile = {
  name: 'clip-default.json',
  size: 0,
  type: 'json',
  base64: jsonToBase64(clip),
};

export const meta = {
  assets: {
    '23706376': {
      id: '23706376',
      attachmentFilename: 'v-01.mp3',
      filePath: 'uploads/fd84f438.mp3',
      contentType: 'audio',
      assetUrl: 'http://audio1',
    },
    '23706377': {
      id: '23706377',
      attachmentFilename: 'modelZ.mp3',
      filePath: 'uploads/fd2412421.mp3',
      contentType: 'audio',
      assetUrl: 'http://audio-main',
    },
    '217afb14': {
      id: '217afb14',
      attachmentFilename: 's6.png',
      filePath: 'uploads/45eceaf4.png',
      contentType: 'image',
      assetUrl: 'http://image1',
    },
    '62c33185': {
      id: '62c33185',
      attachmentFilename: 'hud.json',
      filePath: 'uploads/e7df0a39.json',
      contentType: 'json',
      assetUrl: 'http://hud1',
    },
  },
};
