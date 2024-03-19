import { date } from './date.format';

const parts = date.parts(Date.now());

describe('format date', () => {
  let output;

  it('fromParts single day', () => {
    output = date.fromParts('1');
    expect(output).toBe(`${parts.yearLz}-${parts.monthLz}-01`);
  });

  it('fromParts single month', () => {
    output = date.fromParts('03');
    expect(output).toBe(`${parts.yearLz}-03-01`);
  });

  it('fromParts single month #2', () => {
    output = date.fromParts('011');
    expect(output).toBe(`${parts.yearLz}-11-01`);
  });

  it('fromParts double', () => {
    output = date.fromParts('05-10');
    expect(output).toBe(`${parts.yearLz}-05-10`);
  });

  it('fromParts full', () => {
    output = date.fromParts('25-5-1');
    expect(output).toBe(`2025-05-01`);
  });
});
