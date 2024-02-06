import { createSelector } from 'reselect';
import { green100, green200, green400, green900b } from '../data/data.colors';
import * as raw from './selectors.raw';
import { get } from 'lodash';

export const $mainAudio = createSelector(raw.$rawSceneAudios, (audios) => {
  return Object.values(audios).filter((audio) => audio.isMain)[0];
});

export const $tracks = createSelector(raw.$rawAppState, $mainAudio, (appState, mainAudio) => {
  const { assetsRootUrl } = appState;

  let { url = '', volume, balance } = mainAudio ?? {};

  if (!url.includes('http')) {
    url = `${assetsRootUrl}${url}`;
  }

  return [
    {
      id: 1,
      draggable: false,
      startPosition: 0,
      options: {
        waveColor: green400,
        progressColor: green900b,
        height: 50,
      },
      markers: [],
      url,
      volume,
      balance,
    },
  ];
});

export const $options = createSelector(
  raw.$rawSceneLights,
  raw.$rawSceneExternals,
  raw.$rawSceneMeshes,
  (sceneLights, sceneExternals, sceneMeshes) => {
    return {
      rightButtonDrag: false,
      cursorWidth: 2,
      cursorColor: '#D72F21',
      trackBackground: green100,
      trackBorderColor: green200,
      dragBounds: false,
      envelopeOptions: {
        lineColor: 'rgba(255, 0, 0, 0.7)',
        lineWidth: '4',
        dragPointSize: window.innerWidth < 600 ? 20 : 10,
        dragPointFill: 'rgba(255, 255, 255, 0.8)',
        dragPointStroke: 'rgba(255, 255, 255, 0.3)',
      },
      timelineOptions: {
        height: 17,
        style: {
          opacity: '0.6',
        },
      },
    };
  }
);
