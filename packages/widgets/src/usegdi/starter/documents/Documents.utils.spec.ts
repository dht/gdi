import { parseDocumentsChange } from './Documents.utils';
import { getCurrentWeek } from '@gdi/ui';

describe('parseDocumentsChange', () => {
  let output,
    w = getCurrentWeek();

  it('remove id', () => {
    output = parseDocumentsChange({ id: '123', name: 'John' });
    expect(output).toEqual({ name: 'John' });
  });

  it('parse week', () => {
    output = parseDocumentsChange({ name: 'John', week: '0' });
    expect(output).toEqual({ name: 'John', week: w });

    output = parseDocumentsChange({ name: 'John', week: '+1' });
    expect(output).toEqual({ name: 'John', week: w + 1 });

    output = parseDocumentsChange({ name: 'John', week: '-3' });
    expect(output).toEqual({ name: 'John', week: w - 3 });
  });
});
