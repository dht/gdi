import { parseRemindersChange } from './Reminders.utils';
import { getCurrentWeek } from '@gdi/ui';

describe('parseRemindersChange', () => {
  let output,
    w = getCurrentWeek();

  it('remove id', () => {
    output = parseRemindersChange({ id: '123', name: 'John' });
    expect(output).toEqual({ name: 'John' });
  });

  it('parse week', () => {
    output = parseRemindersChange({ name: 'John', week: '0' });
    expect(output).toEqual({ name: 'John', week: w });

    output = parseRemindersChange({ name: 'John', week: '+1' });
    expect(output).toEqual({ name: 'John', week: w + 1 });

    output = parseRemindersChange({ name: 'John', week: '-3' });
    expect(output).toEqual({ name: 'John', week: w - 3 });
  });
});
