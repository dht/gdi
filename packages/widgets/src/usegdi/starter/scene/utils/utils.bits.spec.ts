import { BitOperation, performBitOperation, validateBitOperation } from './utils.bits';
import { bits } from './utils.bits.fixtures';
import { set } from 'lodash';

const CLIP_DURATION = 66;
const MINIMUM_DURATION_SECONDS = 1;
const MINIMUM_DURATION = MINIMUM_DURATION_SECONDS / CLIP_DURATION;

describe('bits', () => {
  it('validate bit operation: valid', () => {
    const operation: BitOperation = {
      id: 'b1',
      type: 'expand',
      value: 0.2,
    };
    expect(validateBitOperation(operation, bits, MINIMUM_DURATION)).toBe(true);
  });

  it('expand bit #1', () => {
    const operation: BitOperation = {
      id: 'b1',
      type: 'expand',
      value: 1,
    };
    expect(performBitOperation(operation, bits)).toEqual([
      {
        id: 'b1',
        timestamp: 0,
        elements: {
          g1: true,
        },
      },
      {
        id: 'b2',
        timestamp: 6.268,
      },
      {
        id: 'b3',
        timestamp: 9.217,
      },
    ]);
  });

  it('shrink bit #1', () => {
    const operation: BitOperation = {
      id: 'b2',
      type: 'expand',
      value: -1,
    };
    expect(performBitOperation(operation, bits)).toEqual([
      {
        id: 'b1',
        timestamp: 0,
        elements: {
          g1: true,
        },
      },
      {
        id: 'b2',
        timestamp: 5.268,
      },
      {
        id: 'b3',
        timestamp: 7.217,
      },
    ]);
  });

  it('delete bit', () => {
    const operation: BitOperation = {
      id: 'b2',
      value: 0,
      type: 'delete',
    };
    expect(performBitOperation(operation, bits)).toEqual([
      {
        id: 'b1',
        timestamp: 0,
        elements: {
          g1: true,
        },
      },
      {
        id: 'b3',
        timestamp: 8.217,
      },
    ]);
  });

  it('Split bit #1', () => {
    const operation: BitOperation = {
      id: '',
      type: 'split',
      value: 0.7,
    };

    const output = performBitOperation(operation, bits);
    set(output as any, '[1].id', 'newId');
    set(output as any, '[1].name', 'newId');

    expect(output).toEqual([
      {
        id: 'b1',
        timestamp: 0,
        elements: {
          g1: true,
        },
      },
      {
        id: 'newId',
        name: 'newId',
        type: 'basic',
        timestamp: 0.7,
        elements: {
          g1: true,
        },
      },
      {
        id: 'b2',
        timestamp: 5.268,
      },
      {
        id: 'b3',
        timestamp: 8.217,
      },
    ]);
  });
});
