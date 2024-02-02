import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import * as base from './selectors.base';
import { IBit, IDot, Json } from '../types.iso';
import { calcVirtualDot, findVirtualDotInBit } from '../utils/bits';

export const $bitForAnimation = createSelector(
  [base.$bits, (_state, currentTime) => currentTime],
  (bits, currentTime) => {
    return bits.find((bit) => {
      const { start } = bit;
      const delta = currentTime - start;
      return delta > 0 && delta < 0.1;
    });
  }
);

export const $dotsForBit = createSelector(
  [raw.$rawSceneDots, (_state, bitId) => bitId],
  (dots, bitId) => {
    return Object.values(dots).filter((dot) => dot.bitId === bitId);
  }
);

export const $audioForAnimation = createSelector(
  [base.$audios, (_state, currentTime) => currentTime],
  (audios, currentTime) => {
    return audios.find((audio) => {
      const { start } = audio;
      const delta = currentTime - start;
      return delta > 0 && delta < 0.1;
    });
  }
);

export const $speechForAnimation = createSelector(
  [raw.$rawTranscriptLines, (_state, currentTime) => currentTime],
  (transcriptLines, currentTime) => {
    return Object.values(transcriptLines).find((transcriptLine: any) => {
      const { timestamp } = transcriptLine;
      const delta = currentTime - timestamp;
      return delta > 0 && delta < 0.1;
    });
  }
);

export const $effectsForAnimation = createSelector(
  [base.$effects, (_state, currentTime) => currentTime],
  (effects, currentTime) => {
    return effects.find((effect) => {
      const { start } = effect;
      const delta = currentTime - start;
      return delta > 0 && delta < 0.1;
    });
  }
);

export const $bitAndVirtualDot = createSelector(
  [base.$bits, (_state, currentTime) => currentTime],
  (bits, currentTime) => {
    let bit: IBit | undefined, output: any;

    // prioritize selected bit
    bit = bits.find((bit) => bit.isSelected);
    output = findVirtualDotInBit(bit, currentTime);

    if (output.found) {
      return output;
    }

    // according to time
    bit = bits.find((bit) => {
      const { start } = bit;
      const delta = currentTime - start;
      return delta >= 0 && delta < 0.1;
    });
    output = findVirtualDotInBit(bit, currentTime);

    return output;
  }
);
