import { parseListsChange } from './Lists.utils';
import { getCurrentWeek } from '@gdi/ui';

describe('parseListsChange', () => {
  let output,
    w = getCurrentWeek();

  it('remove id', () => {
    output = parseListsChange({ id: '123', name: 'John' });
    expect(output).toEqual({ name: 'John' });
  });

  it('parse week', () => {
    output = parseListsChange({ name: 'John', week: '0' });
    expect(output).toEqual({ name: 'John', week: w });

    output = parseListsChange({ name: 'John', week: '+1' });
    expect(output).toEqual({ name: 'John', week: w + 1 });

    output = parseListsChange({ name: 'John', week: '-3' });
    expect(output).toEqual({ name: 'John', week: w - 3 });
  });
});
