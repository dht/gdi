import { calcNextValue } from './Tier.utils';

describe.only('parseTier', () => {
  let output;

  it('toggle number on', () => {
    output = calcNextValue([], '1');
    expect(output).toEqual(['1']);
  });

  it('toggle number off', () => {
    output = calcNextValue(['1'], '1');
    expect(output).toEqual([]);
  });

  it('click all', () => {
    output = calcNextValue([], 'all');
    expect(output).toEqual(['1', '2', '3', '4']);
  });

  it('click none', () => {
    output = calcNextValue(['1', '2', '3', '4'], 'none');
    expect(output).toEqual([]);
  });
});
