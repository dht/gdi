import { useMemo, useState } from 'react';
import { useKey } from 'react-use';
import { ICoord, ISheetCell, ISpreadsheetConfig, ITableField, Json } from '../../types';
import { useEffect } from 'react';
import { addListener } from 'shared-base';

export function useCustomEvent(
  eventName: string | undefined,
  callback: (data: Json) => void,
  depArray: any[] = []
) {
  useEffect(() => {
    if (!eventName) {
      return;
    }

    const clear = addListener(eventName, callback);

    return () => {
      clear();
    };
  }, depArray);
}

export function useHeaderCells(fields: ITableField[]) {
  const headerCells = useMemo(() => {
    return fields.map((field, index) => {
      const { id } = field;
      const cell: ISheetCell = {
        id: `1-${index + 1}`,
        value: id,
        cellType: 'header',
        x: index + 1,
        y: 1,
      };
      return cell;
    });
  }, [fields]);

  return headerCells;
}

export function useCells(config: ISpreadsheetConfig, data: Json[]) {
  const { fields } = config;
  const headerCells = useHeaderCells(fields);

  const cells = useMemo(() => {
    const output: ISheetCell[] = [];

    data.forEach((row, rowIndex) => {
      fields.forEach((field, fieldIndex) => {
        const { id } = field;

        const value = row[id];

        output.push({
          id: `${rowIndex + 2}-${fieldIndex + 1}`,
          cellType: id === 'id' ? 'id' : 'value',
          value,
          x: fieldIndex + 1,
          y: rowIndex + 2,
        });
      });
    });

    return [...headerCells, ...output];
  }, [headerCells, data]);

  return cells;
}

type SheetInfo = {
  rowsPerPage: number;
};

export function useArrows(initialCoord: ICoord, info: SheetInfo) {
  const { rowsPerPage = 30 } = info;
  const [coord, setCoord] = useState(initialCoord);

  const onNudge = (dx: number, dy: number) => {
    setCoord((prevCoord) => {
      const { x, y } = prevCoord;
      const nextX = Math.max(0, x + dx);
      const nextY = Math.max(0, y + dy);
      return { x: nextX, y: nextY };
    });
  };

  useKey('ArrowUp', (ev) => {
    ev.preventDefault();
    onNudge(0, -1);
  });

  useKey('ArrowDown', (ev) => {
    ev.preventDefault();
    onNudge(0, 1);
  });

  useKey('ArrowLeft', (ev) => {
    ev.preventDefault();
    onNudge(-1, 0);
  });

  useKey('ArrowRight', (ev) => {
    ev.preventDefault();
    onNudge(1, 0);
  });

  useKey('PageDown', () => onNudge(0, rowsPerPage - 1), {}, [rowsPerPage]);
  useKey('PageUp', () => onNudge(0, -rowsPerPage + 1), {}, [rowsPerPage]);

  useCustomEvent('sheet/move/down', () => {
    onNudge(0, 1);
  });

  useCustomEvent('sheet/move/up', () => {
    onNudge(0, -1);
  });

  useCustomEvent('sheet/move/left', () => {
    onNudge(-1, 0);
  });

  useCustomEvent('sheet/move/right', () => {
    onNudge(1, 0);
  });

  return [coord, setCoord] as const;
}
