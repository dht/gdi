import { parseCalendarChange } from './Calendar.utils';
import { getCurrentWeek } from '@gdi/ui';

describe('parseCalendarChange', () => {
  let output,
    w = getCurrentWeek();

  it('remove id', () => {
    output = parseCalendarChange({ id: '123', name: 'John' });
    expect(output).toEqual({ name: 'John' });
  });

  it('parse week', () => {
    output = parseCalendarChange({ name: 'John', week: '0' });
    expect(output).toEqual({ name: 'John', week: w });

    output = parseCalendarChange({ name: 'John', week: '+1' });
    expect(output).toEqual({ name: 'John', week: w + 1 });

    output = parseCalendarChange({ name: 'John', week: '-3' });
    expect(output).toEqual({ name: 'John', week: w - 3 });
  });
});
