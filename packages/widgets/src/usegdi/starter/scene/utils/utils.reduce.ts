import {
  AllEntities,
  IBit,
  IBitWithPairs,
  ICursor,
  IDot,
  IElement,
  ISetPiece,
  IKeyframe,
} from '@gdi/store-iso';
import { get } from 'lodash';
import { getPair } from './utils.animation';
import { extrapolateAnimation } from './utils.extrapolate';
import { cleanUndefined } from './utils.object';

export const reduceElements = (currentTime: number, entities: AllEntities): ISetPiece => {
  const output: ISetPiece = {
    cameraId: '',
    elements: [],
  };

  output.elements = entities.allElements.map((element) => {
    return reduceElement(currentTime, element.id, entities);
  });

  output.cameraId = reduceCamera(currentTime, entities);

  return output;
};

export const reduceCamera = (currentTime: number, entities: AllEntities) => {
  let output = 'free';

  const { allBits } = entities;

  const cursor = calcCursor(entities, currentTime);

  const bit = allBits.find((b) => b.id === cursor.bitId);

  if (bit && bit.cameraId) {
    output = bit.cameraId;
  }

  return output;
};

export const reduceElement = (
  currentTime: number,
  elementId: string,
  entities: AllEntities
): IElement => {
  const { allBits, allElements } = entities;

  let startDot: IDot | undefined;
  let endDot: IDot | undefined;

  const element = allElements.find((element) => element.id === elementId)!;
  const bitsWithPairs = bitsForElement(entities, elementId);
  const cursor = calcCursor(entities, currentTime);
  const currentBit = bitsWithPairs.find((b) => b.id === cursor.bitId);

  if (!currentBit || !element) return element;

  const bitsToReduce = bitsWithPairs.filter((b) => b.index ?? 0 < (currentBit?.index ?? 0));

  // scene values
  const currentKeyframe: IKeyframe = getKeyframe(element);

  // previous bit values
  for (let bit of bitsToReduce) {
    startDot = bit.startDot;
    endDot = bit.endDot;

    applyDotToKeyframe(currentKeyframe, startDot);
    applyDotToKeyframe(currentKeyframe, endDot);
  }

  // current bit value start
  startDot = currentBit.startDot;
  endDot = currentBit.endDot;
  applyVisibilityToKeyframe(currentKeyframe, elementId, currentBit);

  switch (cursor.pos) {
    case 'bitStart':
      applyDotToKeyframe(currentKeyframe, startDot);
      break;
    case 'bitMiddle':
      const percent = getBitPercent(currentBit, currentTime);
      applyDotToKeyframe(currentKeyframe, startDot);
      const midDot = extrapolateAnimation(percent, startDot, endDot);
      applyDotToKeyframe(currentKeyframe, midDot as any);
      break;
    case 'bitEnd':
      applyDotToKeyframe(currentKeyframe, startDot);
      applyDotToKeyframe(currentKeyframe, endDot);
  }

  return {
    ...element,
    currentKeyframe,
  };
};

export const applyDotToKeyframe = (keyframe: IKeyframe, dot?: IDot) => {
  if (!dot) return;

  const { values } = dot;

  for (let key in values) {
    (keyframe as any)[key] = values[key];
  }
};

export const applyVisibilityToKeyframe = (keyframe: IKeyframe, elementId: string, bit?: IBit) => {
  if (!bit) return;

  const { elements } = bit;

  const isVisible = elements[elementId];

  if (isVisible === undefined) return;

  keyframe.isVisible = isVisible;
};

export const getBitPercent = (bit: IBit, currentTime: number) => {
  const { start = 0, end = 0 } = bit;
  if (end - start === 0) return 0;
  return (currentTime - start) / (end - start);
};

export const getKeyframeMesh = (element: IElement) => {
  const output = {
    position: get(element, 'item.position'),
    rotation: get(element, 'item.rotation'),
    scaling: get(element, 'item.scaling'),
  };

  return cleanUndefined(output);
};

export const getKeyframeCamera = (element: IElement) => {
  const cameraType = get(element, 'item.type');

  const output =
    cameraType === 'arc'
      ? {
          alpha: get(element, 'item.values.alpha'),
          beta: get(element, 'item.values.beta'),
          radius: get(element, 'item.values.radius'),
        }
      : {
          position: get(element, 'item.position'),
          rotation: get(element, 'item.rotation'),
          scaling: get(element, 'item.scaling'),
        };

  return cleanUndefined(output);
};

export const getKeyframe = (element: IElement) => {
  const isCamera = get(element, 'type') === 'camera';
  return isCamera ? getKeyframeCamera(element) : getKeyframeMesh(element);
};

export const bitsForElement = (entities: AllEntities, elementId: string): IBitWithPairs[] => {
  const { allBits, allDots } = entities;
  return allBits.map((bit) => {
    const pair = getPair(allDots, bit.id, elementId);

    return {
      elementId,
      ...bit,
      ...pair,
    };
  });
};

export const canFit = (bit: IBit, currentTime: number) => {
  const { start, end } = bit;

  const noData = start === undefined || end === undefined;

  if (noData) return false;

  const deltaStart = Math.abs(start - currentTime);
  const deltaEnd = Math.abs(end - currentTime);

  return deltaStart < 0.02 || deltaEnd < 0.02;
};

export const calcCursor = (entities: AllEntities, currentTime: number): ICursor => {
  const { allBits, currentBitId } = entities;

  let output: ICursor = {
    pos: 'outOfBounds',
  };

  // prefer selected bit
  let bit = allBits.find((b) => b.id === currentBitId);

  // otherwise find another candidate
  if (!bit || !canFit(bit, currentTime)) {
    bit = allBits.find((b) => {
      const { start = 0, end = 0 } = b;
      return start <= currentTime && end > currentTime;
    });
  }

  if (!bit) {
    return output;
  }

  const { end = 0 } = bit;
  output.bitId = bit.id;
  output.pos = 'bitMiddle';

  if (bit.start === currentTime) {
    output.pos = 'bitStart';
  } else if (Math.abs(end - currentTime) < 0.02) {
    output.pos = 'bitEnd';
  }

  return output;
};
