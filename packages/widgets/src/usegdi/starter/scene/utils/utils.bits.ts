import { IBit } from '@gdi/store-iso';
import { guid4, invokeEvent, sortBy } from 'shared-base';

export type BitOperation = {
  id: string;
  type: 'expand' | 'split' | 'delete';
  value: number;
};

export function validateBitOperation(operation: BitOperation, bits: IBit[], minDuration: number) {
  return true;
}

export const roundFloat = (value: number, precision: number) => {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

export const performExpand = (operation: BitOperation, bits: IBit[]) => {
  const sortedBits = bits.sort(sortBy('timestamp'));

  const bitIndex = sortedBits.findIndex((bit) => bit.id === operation.id);

  return sortedBits.map((bit, index) => {
    if (index <= bitIndex) return bit;

    const { timestamp } = bit;
    return {
      ...bit,
      timestamp: roundFloat(timestamp + operation.value, 3),
    };
  });
};

export const performDelete = (operation: BitOperation, bits: IBit[]) => {
  return bits.filter((bit) => bit.id !== operation.id);
};

export const performSplit = (operation: BitOperation, bits: IBit[]) => {
  const nextId = guid4();

  const sortedBits = bits.sort(sortBy('timestamp'));
  const bit = sortedBits.find((bit) => bit.timestamp < operation.value);

  if (!bit) {
    return bits;
  }

  const newBit = {
    id: nextId,
    name: nextId,
    type: 'basic',
    timestamp: operation.value,
    elements: bit.elements,
  };

  return [...bits, newBit].sort(sortBy('timestamp'));
};

export function performBitOperation(operation: BitOperation, bits: IBit[]) {
  switch (operation.type) {
    case 'expand':
      return performExpand(operation, bits);
    case 'delete':
      return performDelete(operation, bits);
    case 'split':
      return performSplit(operation, bits);
  }

  return bits;
}

export const arrayToObject = (array: any[], key: string = 'id') => {
  return array.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
};

type Pos = 'start' | 'end';

export const seekTo = (bit?: IBit, pos: Pos = 'start') => {
  if (!bit) return;

  const { timestampPercent = 0, durationPercent = 0 } = bit;

  const value = pos === 'start' ? timestampPercent : timestampPercent + durationPercent;
  invokeEvent('waveform/seek', { value });
};
