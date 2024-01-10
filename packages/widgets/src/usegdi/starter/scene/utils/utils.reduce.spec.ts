import { get } from 'lodash';
import {
  applyDotToKeyframe,
  applyVisibilityToKeyframe,
  bitsForElement,
  calcCursor,
  getKeyframe,
  reduceElement,
} from './utils.reduce';
import { entities } from './utils.reduce.fixtures';

const mesh = get(entities, 'allElements[0]');
const free = get(entities, 'allElements[1]');
const arc = get(entities, 'allElements[2]');

describe('reduce', () => {
  it('bitsForElement', () => {
    expect(bitsForElement(entities, 'box')).toEqual([
      {
        duration: 0.1,
        elementId: 'box',
        elements: { arc: false, box: true },
        endDot: undefined,
        order: 1,
        start: 0,
        end: 6,
        id: 'bit-01',
        name: 'bit-01',
        startDot: {
          bitId: 'bit-01',
          cameraId: 'arc',
          id: 'dot_1_box_start',
          values: { position: [10, 10, 0], rotation: [0, 180, 0], scaling: [2, 2, 2] },
          virtualDotId: 'start',
        },
        timestamp: 0,
      },
      {
        duration: 0.3,
        order: 2,
        start: 6,
        end: 24,
        elementId: 'box',
        elements: { arc: true, box: false, free: false },
        endDot: {
          bitId: 'bit-02',
          id: 'dot_2_box_end',
          meshId: 'box',
          values: { position: [0, 10, 0], rotation: [0, 180, 0], scaling: [2, 2, 2] },
          virtualDotId: 'end',
        },
        id: 'bit-02',
        name: 'bit-02',
        startDot: {
          bitId: 'bit-02',
          easing: [0.3, 0.2, 0.7, 0.8],
          id: 'dot_2_box_start',
          meshId: 'box',
          values: { position: [0, 0, 0], rotation: [0, 0, 0], scaling: [1, 1, 1] },
          virtualDotId: 'start',
        },
        timestamp: 0.1,
      },
      {
        duration: 0.6,
        elementId: 'box',
        order: 3,
        elements: { arc: false, box: true, free: true },
        endDot: undefined,
        id: 'bit-03',
        start: 24,
        end: 60,
        name: 'bit-03',
        startDot: undefined,
        timestamp: 0.4,
      },
    ]);
  });

  it('reduceElement mesh #1', () => {
    const output = reduceElement(0, 'box', entities);

    expect(output.currentKeyframe).toEqual({
      position: [10, 10, 0],
      rotation: [0, 180, 0],
      scaling: [2, 2, 2],
      isVisible: true,
    });
  });

  it('reduceElement mesh #2', () => {
    const output = reduceElement(6, 'box', entities);

    expect(output.currentKeyframe).toEqual({
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scaling: [1, 1, 1],
      isVisible: false,
    });
  });

  it('reduceElement mesh #3', () => {
    const output = reduceElement(8, 'box', entities);
    const py = get(output, 'currentKeyframe.position[1]');
    const ry = get(output, 'currentKeyframe.rotation[1]');
    const sy = get(output, 'currentKeyframe.scaling[1]');

    expect(py).toBeCloseTo(0.8);
    expect(ry).toBeCloseTo(14.47);
    expect(sy).toBeCloseTo(1.08);
  });

  it('reduceElement camera #1', () => {
    const output = reduceElement(0, 'arc', entities);
    const alpha = get(output, 'currentKeyframe.alpha');
    const beta = get(output, 'currentKeyframe.beta');
    const radius = get(output, 'currentKeyframe.radius');

    expect(alpha).toBeCloseTo(130);
    expect(beta).toBeCloseTo(60);
    expect(radius).toBeCloseTo(50);
  });

  it('reduceElement camera #2', () => {
    const output = reduceElement(8, 'arc', entities);
    const alpha = get(output, 'currentKeyframe.alpha');
    const beta = get(output, 'currentKeyframe.beta');
    const radius = get(output, 'currentKeyframe.radius');

    expect(alpha).toBeCloseTo(42.59);
    expect(beta).toBeCloseTo(60);
    expect(radius).toBeCloseTo(20.8);
  });

  it('applyDotToKeyframe #1', () => {
    const keyframe = {};
    const dot = get(entities, 'allDots[0]');
    applyDotToKeyframe(keyframe, dot);
    expect(keyframe).toEqual({ ...dot.values });
  });

  it('applyDotToKeyframe #1', () => {
    const keyframe = {};
    const dot = get(entities, 'allDots[0]');
    applyDotToKeyframe(keyframe, dot);
    expect(keyframe).toEqual({ ...dot.values });
  });

  it('getKeyframe', () => {
    expect(getKeyframe(mesh)).toEqual({ position: [0, 5, 0] });
    expect(getKeyframe(free)).toEqual({ position: [-32, 29, 24] });
    expect(getKeyframe(arc)).toEqual({ alpha: 130, beta: 60, radius: 50 });
  });

  it('getCursorPos', () => {
    expect(calcCursor(entities, 0)).toEqual({ bitId: 'bit-01', pos: 'bitStart' });
    expect(calcCursor(entities, 3)).toEqual({ bitId: 'bit-01', pos: 'bitMiddle' });
    expect(calcCursor(entities, 5.99)).toEqual({ bitId: 'bit-01', pos: 'bitEnd' });
    expect(calcCursor(entities, 6)).toEqual({ bitId: 'bit-02', pos: 'bitStart' });
    expect(calcCursor(entities, 12)).toEqual({ bitId: 'bit-02', pos: 'bitMiddle' });
    expect(calcCursor(entities, 23.99)).toEqual({ bitId: 'bit-02', pos: 'bitEnd' });
    expect(calcCursor(entities, 24)).toEqual({ bitId: 'bit-03', pos: 'bitStart' });
  });

  it('applyVisibilityToKeyframe visible', () => {
    const keyframe = {};
    const bit = get(entities, 'allBits[0]');
    applyVisibilityToKeyframe(keyframe, 'box', bit);
    expect(keyframe).toEqual({ isVisible: true });
  });

  it('applyVisibilityToKeyframe hidden', () => {
    const keyframe = {};
    const bit = get(entities, 'allBits[1]');
    applyVisibilityToKeyframe(keyframe, 'box', bit);
    expect(keyframe).toEqual({ isVisible: false });
  });
});
