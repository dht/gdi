import { parseContactChange } from './Contacts.utils';
import { getCurrentWeek } from '@gdi/ui';

describe.only('parseContactChange', () => {
  let output,
    w = getCurrentWeek();

  it('remove id', () => {
    output = parseContactChange({ id: '123', name: 'John' });
    expect(output).toEqual({ name: 'John' });
  });

  it('parse week', () => {
    output = parseContactChange({ name: 'John', week: '0' });
    expect(output).toEqual({ name: 'John', week: w });

    output = parseContactChange({ name: 'John', week: '+1' });
    expect(output).toEqual({ name: 'John', week: w + 1 });

    output = parseContactChange({ name: 'John', week: '-3' });
    expect(output).toEqual({ name: 'John', week: w - 3 });
  });
});
