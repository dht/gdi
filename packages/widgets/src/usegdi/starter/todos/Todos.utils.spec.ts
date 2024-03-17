import { parseTodosChange } from './Todos.utils';
import { getCurrentWeek } from '@gdi/ui';

describe('parseTodosChange', () => {
  let output,
    w = getCurrentWeek();

  it('remove id', () => {
    output = parseTodosChange({ id: '123', name: 'John' });
    expect(output).toEqual({ name: 'John' });
  });

  it('parse week', () => {
    output = parseTodosChange({ name: 'John', week: '0' });
    expect(output).toEqual({ name: 'John', week: w });

    output = parseTodosChange({ name: 'John', week: '+1' });
    expect(output).toEqual({ name: 'John', week: w + 1 });

    output = parseTodosChange({ name: 'John', week: '-3' });
    expect(output).toEqual({ name: 'John', week: w - 3 });
  });
});
