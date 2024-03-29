import { createSelector } from 'reselect';
import { sortBy } from 'shared-base';
import { iconsBits, iconsElements } from '../data/data.icons';
import { IAudio, ISceneEffect, Json } from '../types.iso';
import { analyzeItems } from '../utils/timeline';
import * as raw from './selectors.raw';

export const $elements = createSelector(
  raw.$rawSceneLights,
  raw.$rawSceneExternals,
  raw.$rawSceneMeshes,
  raw.$rawScenePacks,
  raw.$rawSceneVASPs,
  raw.$rawSceneCameras,
  raw.$rawSceneCharacters,
  raw.$rawSceneDynamics,
  (
    sceneLights,
    sceneExternals,
    sceneMeshes,
    scenePacks,
    sceneVASPs,
    sceneCameras,
    sceneCharacters,
    sceneDynamics
  ) => {
    return {
      sceneLights,
      sceneExternals,
      sceneMeshes,
      scenePacks,
      sceneVASPs,
      sceneCameras,
      sceneCharacters,
      sceneDynamics,
    };
  }
);

export const $elementsList = createSelector(
  $elements,
  ({ sceneMeshes, sceneExternals, sceneLights, sceneCameras, sceneCharacters, sceneDynamics }) => {
    const output = [];

    const createItem = (item: any, type: string) => {
      const { id, label = id, type: subtype, isSticky, enabled } = item;
      const code = JSON.stringify(item, null, 2);
      const iconName = iconsElements[type];
      return { id, label, type, subtype, enabled, item, code, iconName, isSticky, isVisible: true }; // prettier-ignore
    };

    for (const item of Object.values(sceneMeshes)) {
      output.push(createItem(item, 'mesh'));
    }

    for (const item of Object.values(sceneExternals)) {
      output.push(createItem(item, 'external'));
    }

    for (const item of Object.values(sceneLights)) {
      output.push(createItem(item, 'light'));
    }

    for (const item of Object.values(sceneCameras)) {
      output.push(createItem(item, 'camera'));
    }

    for (const item of Object.values(sceneCharacters)) {
      output.push(createItem(item, 'character'));
    }

    for (const item of Object.values(sceneDynamics)) {
      output.push(createItem(item, 'dynamicMesh'));
    }

    return output;
  }
);

export const $elementEdit = createSelector(
  $elementsList,
  raw.$rawSceneCurrentIds,
  (elementsList, sceneCurrentIds) => {
    const { editId } = sceneCurrentIds;
    return elementsList.find((item: Json) => item.id === editId);
  }
);

export const $element = createSelector(
  $elementsList,
  raw.$rawSceneCurrentIds,
  (elementsList, sceneCurrentIds) => {
    const { elementId } = sceneCurrentIds;
    return elementsList.find((item: Json) => item.id === elementId);
  }
);

export const $bits = createSelector(
  raw.$rawSceneBits,
  raw.$rawSceneState,
  raw.$rawSceneCurrentIds,
  (bits, sceneState, currentIds) => {
    const { bitId } = currentIds;
    const { totalTime, currentTime } = sceneState;

    const bitsArr = Object.values(bits).sort(sortBy('timestamp'));

    return bitsArr.map((bit, index) => {
      const nextBit = bitsArr[index + 1];

      const { id, type, timestamp, attachmentUrl } = bit;

      const nextTimestamp = nextBit ? nextBit.timestamp : totalTime;

      const timestampPercent = timestamp / totalTime;

      const duration = nextTimestamp - timestamp;
      const durationPercent = duration / totalTime;

      const start = timestamp;
      const end = start + duration;

      const isSelected = id === bitId;
      const isHovered = currentTime >= start && currentTime <= end;

      const iconName = iconsBits[type];

      return {
        ...bit,
        index,
        iconName,
        timestampPercent,
        duration,
        durationPercent,
        start,
        end,
        attachmentUrl,
        isSelected,
        isHovered,
      };
    });
  }
);

export const $timelineMeta = createSelector(
  raw.$rawAppState,
  raw.$rawSceneState,
  (appState, sceneState) => {
    const { assetsRootUrl } = appState;
    const { totalTime, currentTime } = sceneState;

    return {
      totalTime,
      currentTime,
      assetsRootUrl,
    };
  }
);

export const $audios = createSelector(
  raw.$rawSceneAudios,
  raw.$rawSceneCurrentIds,
  $timelineMeta,
  (audios, currentIds, meta) => {
    const { audioId } = currentIds;
    return analyzeItems<IAudio>(audios, audioId, meta).filter((audio) => !audio.isMain);
  }
);

export const $effects = createSelector(
  raw.$rawSceneEffects,
  raw.$rawSceneCurrentIds,
  $timelineMeta,
  (effects, currentIds, meta) => {
    const { effectId } = currentIds;
    return analyzeItems<ISceneEffect>(effects, effectId, meta);
  }
);

export const $bitAtCurrentTime = createSelector($bits, raw.$rawSceneState, (bits, sceneState) => {
  const { currentTime } = sceneState;

  const output = {
    bit: null as any,
    padLeft: 0,
    padRight: 0,
  };

  const bit = bits.find((bit: Json) => {
    return bit.isHovered;
  });

  if (!bit) {
    return output;
  }

  const { start, end } = bit;

  output.bit = bit;
  output.padLeft = currentTime - start;
  output.padRight = end - currentTime;

  return output;
});

export const $bit = createSelector($bits, raw.$rawSceneCurrentIds, (bits, sceneCurrentIds) => {
  const { bitId } = sceneCurrentIds;
  return bits.find((bit: Json) => bit.id === bitId);
});

export const $elementListForBit = createSelector($elementsList, $bit, (elementsList, bit) => {
  if (!bit) {
    return elementsList
      .filter((item) => !item.isSticky)
      .map((item: Json) => {
        const { enabled: isVisible } = item;
        return { ...item, isVisible };
      });
  }

  const { elements } = bit;

  return elementsList
    .filter((item) => !item.isSticky)
    .map((item: Json) => {
      const { id } = item;
      const isVisible = elements[id] ?? false;
      return { ...item, isVisible };
    });
});

export const $dots = createSelector(raw.$rawSceneDots, (dots) => {
  return Object.values(dots);
});

export const $allEntities = createSelector(
  $elementsList,
  $bits,
  $dots,
  raw.$rawSceneCurrentIds,
  (elements, bits, dots, currentIds) => {
    const { bitId } = currentIds;

    return {
      allElements: elements,
      allBits: bits,
      allDots: dots,
      currentBitId: bitId,
    };
  }
);

export const $dot = createSelector(
  raw.$rawSceneCurrentIds,
  raw.$rawSceneDots,
  (currentIds, dots) => {
    const { dotId } = currentIds;
    return dots[dotId];
  }
);

export const $elementLabels = createSelector($elementsList, (elementsList) => {
  return elementsList.reduce((acc: Json, item: Json) => {
    const { id, label = id } = item;
    acc[id] = label;
    return acc;
  }, {});
});

export const $onDot = createSelector(raw.$rawSceneCurrentIds, (currentIds) => {
  const { bitId, virtualDotId, trackId, cameraId, elementId } = currentIds;

  const okBit = bitId !== '';
  const okVirtualDot = virtualDotId !== '';
  const okTrack = trackId !== '';
  const okCamera = (trackId === 'camera' && cameraId !== '') || trackId !== 'camera';
  const okElement = (trackId === 'object' && elementId !== '') || trackId !== 'object';

  return okBit && okVirtualDot && okTrack && okCamera && okElement;
});

export const $totalTime = createSelector(raw.$rawSceneState, (sceneState) => {
  const { totalTime } = sceneState;

  return totalTime;
});

export const $nextBit = createSelector(
  [$bits, (_state, currentBitId) => currentBitId],
  (bits, currentBitId) => {
    const index = bits.findIndex((bit: Json) => bit.id === currentBitId);
    return bits[index + 1];
  }
);
