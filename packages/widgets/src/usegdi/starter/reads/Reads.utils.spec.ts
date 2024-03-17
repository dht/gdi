import { parseReadsChange } from './Reads.utils';
import { getCurrentWeek } from '@gdi/ui';

describe('parseReadsChange', () => {
  let output,
    w = getCurrentWeek();

  it('remove id', () => {
    output = parseReadsChange({ id: '123', name: 'John' });
    expect(output).toEqual({ name: 'John' });
  });

  it('parse week', () => {
    output = parseReadsChange({ name: 'John', week: '0' });
    expect(output).toEqual({ name: 'John', week: w });

    output = parseReadsChange({ name: 'John', week: '+1' });
    expect(output).toEqual({ name: 'John', week: w + 1 });

    output = parseReadsChange({ name: 'John', week: '-3' });
    expect(output).toEqual({ name: 'John', week: w - 3 });
  });
});
