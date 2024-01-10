import { createSelector } from 'reselect';
import * as base from './selectors.base';
import * as raw from './selectors.raw';
import { createDotId, dotExists } from '../utils/dots';

export const $dotsAtCurrentTime = createSelector(
  [raw.$rawSceneCurrentIds, base.$bits, (_state, currentTime) => currentTime],
  (currentIds, bits, currentTime) => {
    const { bitId } = currentIds;
    const bit = bits.find((bit: any) => bit.id === bitId);

    if (!bit) {
      return;
    }

    const { start, end } = bit;

    const deltaStart = Math.abs(currentTime - start);
    const deltaEnd = Math.abs(end - currentTime);

    if (deltaStart < 0.1) {
      return 'start';
    }

    if (deltaEnd < 0.1) {
      return 'end';
    }
  }
);

export const $dotsExist = createSelector(
  raw.$rawSceneCurrentIds,
  raw.$rawSceneDots,
  raw.$rawSceneBits,
  (currentIds, dots, bits) => {
    const { bitId, virtualDotId, cameraId, meshId, elementId } = currentIds;
    const bit = Object.values(bits).find((bit: any) => bit.id === bitId);

    const output = {
      camera: {
        start: false,
        end: false,
      },
      object: {
        start: false,
        end: false,
      },
    };

    if (!bitId || !virtualDotId || !bit) {
      return output;
    }

    const dotIds = Object.keys(dots);

    if (elementId) {
      output.object.start = dotExists(currentIds, { virtualDotId: 'start', trackId: 'object' }, dotIds); // prettier-ignore
      output.object.end = dotExists(currentIds, { virtualDotId: 'end', trackId: 'object' }, dotIds); // prettier-ignore
    }

    if (cameraId && bit.cameraId === cameraId) {
      output.camera.start = dotExists(currentIds, { virtualDotId: 'start', trackId: 'camera' }, dotIds); // prettier-ignore
      output.camera.end = dotExists(currentIds, { virtualDotId: 'end', trackId: 'camera' }, dotIds); // prettier-ignore
    }

    return output;
  }
);
