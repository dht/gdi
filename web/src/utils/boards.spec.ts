import { parseHash } from './boards';
import { describe, expect, it } from '@jest/globals';

describe.only('board utils', () => {
  it('parseHash', () => {
    expect(parseHash('#')).toEqual({
      boardDbPath: '',
      dbType: 'none',
      hash: '#',
    });

    expect(parseHash('#/static/park-expanse.json')).toEqual({
      boardDbPath: '/static/park-expanse.json',
      dbType: 'static',
      hash: '#/static/park-expanse.json',
    });

    expect(parseHash('#/dynamic/park-expanse.json')).toEqual({
      boardDbPath: '/dynamic/park-expanse.json',
      dbType: 'dynamic',
      hash: '#/dynamic/park-expanse.json',
    });

    expect(parseHash('#/dynamic/park-expanse.json|park')).toEqual({
      boardDbPath: '/dynamic/park-expanse.json',
      dbType: 'dynamic',
      hash: '#/dynamic/park-expanse.json|park',
    });

    expect(parseHash('#|park')).toEqual({
      boardDbPath: '',
      dbType: 'none',
      hash: '#|park',
    });
  });
});
