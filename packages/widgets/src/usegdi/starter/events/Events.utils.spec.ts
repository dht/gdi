import { parseEventsChange } from './Events.utils';
import { getCurrentWeek } from '@gdi/ui';

describe('parseEventsChange', () => {
  let output,
    w = getCurrentWeek();

  it('remove id', () => {
    output = parseEventsChange({ id: '123', name: 'John' });
    expect(output).toEqual({ name: 'John' });
  });

  it('parse week', () => {
    output = parseEventsChange({ name: 'John', week: '0' });
    expect(output).toEqual({ name: 'John', week: w });

    output = parseEventsChange({ name: 'John', week: '+1' });
    expect(output).toEqual({ name: 'John', week: w + 1 });

    output = parseEventsChange({ name: 'John', week: '-3' });
    expect(output).toEqual({ name: 'John', week: w - 3 });
  });
});
