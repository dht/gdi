import { createCubicBezier } from 'isokit2';
import { get } from 'lodash';
import { applyEasing, applyEasingVector, extrapolateAnimation } from './utils.extrapolate';
import { dots } from './utils.extrapolate.fixtures';

describe('extrapolate', () => {
  it('createCubicBezier', () => {
    const fn = createCubicBezier([1, 0, 0, 1]);
    expect(fn(0)).toBe(0);
    expect(fn(1)).toBe(1);
    expect(fn(0.8)).toBeCloseTo(0.9);
  });

  it('applyEasingVector', () => {
    expect(applyEasingVector([10, 20, 30], [100, 100, 100], [1, 0, 0, 1], 0.5)).toEqual([
      55, 60, 65,
    ]);
  });

  it('applyEasing', () => {
    expect(applyEasing(0, 1000, [1, 0, 0, 1], 0.2)).toBeCloseTo(104);
  });

  it('extrapolateAnimation', () => {
    const startDot = get(dots, '[0]');
    const endDot = get(dots, '[1]');
    const output = extrapolateAnimation(0.7, startDot, endDot);
    const values = get(output, 'values');

    expect(values.alpha).toBeCloseTo(15.66);
    expect(values.beta).toBeCloseTo(23.32);
    expect(values.radius).toBeCloseTo(27.34);
  });
});
