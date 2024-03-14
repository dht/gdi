import { useMemo, useState } from 'react';
import { useKey } from 'react-use';
import { ICoord, ISheetCell, ISpreadsheetConfig, ITableField, Json } from '../../types';

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

export function useArrows(initialCoord: ICoord) {
  const [coord, setCoord] = useState(initialCoord);

  useKey('ArrowUp', () => {
    setCoord((prevCoord) => {
      const { x, y } = prevCoord;
      const nextY = Math.max(1, y - 1);
      return { x, y: nextY };
    });
  });

  useKey('ArrowDown', () => {
    setCoord((prevCoord) => {
      const { x, y } = prevCoord;
      const nextY = Math.min(30, y + 1);
      return { x, y: nextY };
    });
  });

  useKey('ArrowLeft', () => {
    setCoord((prevCoord) => {
      const { x, y } = prevCoord;
      const nextX = Math.max(1, x - 1);
      return { x: nextX, y };
    });
  });

  useKey('ArrowRight', () => {
    setCoord((prevCoord) => {
      const { x, y } = prevCoord;
      const nextX = Math.min(15, x + 1);
      return { x: nextX, y };
    });
  });

  return [coord, setCoord] as const;
}
