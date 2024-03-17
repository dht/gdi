import { parsePostsChange } from './Posts.utils';
import { getCurrentWeek } from '@gdi/ui';

describe('parsePostsChange', () => {
  let output,
    w = getCurrentWeek();

  it('remove id', () => {
    output = parsePostsChange({ id: '123', name: 'John' });
    expect(output).toEqual({ name: 'John' });
  });

  it('parse week', () => {
    output = parsePostsChange({ name: 'John', week: '0' });
    expect(output).toEqual({ name: 'John', week: w });

    output = parsePostsChange({ name: 'John', week: '+1' });
    expect(output).toEqual({ name: 'John', week: w + 1 });

    output = parsePostsChange({ name: 'John', week: '-3' });
    expect(output).toEqual({ name: 'John', week: w - 3 });
  });
});
