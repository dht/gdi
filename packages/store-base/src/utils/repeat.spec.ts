import { parseItemsRepeat } from './repeat';

describe('repeat', () => {
  let output;

  it('Mx2', () => {
    output = parseItemsRepeat([
      {
        id: 'i1',
        date: '2025-10-01',
        repeat: 'Mx2',
      },
    ]);

    expect(output).toEqual([
      {
        id: 'i1',
        date: '2025-10-01',
        repeat: 'Mx2',
      },
      {
        id: output[1].id,
        date: '2025-11-01',
        repeat: 'Mx2',
        isVirtual: true,
      },
      {
        id: output[2].id,
        date: '2025-12-01',
        repeat: 'Mx2',
        isVirtual: true,
      },
    ]);
  });

  it('M', () => {
    output = parseItemsRepeat(
      [
        {
          id: 'i1',
          date: '2025-10-01',
          repeat: 'M',
        },
      ],
      1
    );

    expect(output).toEqual([
      {
        id: 'i1',
        date: '2025-10-01',
        repeat: 'M',
      },
      {
        id: output[1].id,
        date: '2025-11-01',
        repeat: 'M',
        isVirtual: true,
      },
    ]);
  });

  it('Wx2', () => {
    output = parseItemsRepeat([
      {
        id: 'i1',
        date: '2025-10-01',
        repeat: 'Wx2',
      },
    ]);

    expect(output).toEqual([
      {
        id: 'i1',
        date: '2025-10-01',
        repeat: 'Wx2',
      },
      {
        id: output[1].id,
        date: '2025-10-08',
        repeat: 'Wx2',
        isVirtual: true,
      },
      {
        id: output[2].id,
        date: '2025-10-15',
        repeat: 'Wx2',
        isVirtual: true,
      },
    ]);
  });

  it('D', () => {
    output = parseItemsRepeat(
      [
        {
          id: 'i1',
          date: '2025-10-01',
          repeat: 'D',
        },
      ],
      1
    );

    expect(output).toEqual([
      {
        id: 'i1',
        date: '2025-10-01',
        repeat: 'D',
      },
      {
        id: output[1].id,
        date: '2025-10-02',
        repeat: 'D',
        isVirtual: true,
      },
    ]);
  });
});
