import { useEffect, useRef } from 'react';
import { useArrows } from './Spreadsheet.hooks';
import { Wrapper } from './Spreadsheet.style';
import { ISheetCell } from './Spreadsheet.types';
import { Cell } from './_parts/Cell/Cell';
import { SelectCell } from './_parts/SelectCell/SelectCell';

export type SpreadsheetProps = {
  cells: ISheetCell[];
  onSelect: (x: number, y: number) => void;
  onChange: (x: number, y: number, value: string) => void;
};

export function Spreadsheet(props: SpreadsheetProps) {
  const { cells } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [coord, setCoord] = useArrows({ x: 0, y: 0 });

  useEffect(() => {
    props.onSelect(coord.x, coord.y);
  }, [coord]);

  function onChange(x: number, y: number, value: string) {
    props.onChange(coord.x, coord.y, value);

    if (!value) {
      return;
    }

    // nudge down
    setCoord({ x, y: y + 1 });
    props.onSelect(x, y + 1);
  }

  function onClick(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!ref.current) {
      return;
    }

    const bounds = ref.current.getBoundingClientRect();
    const x = ev.clientX - bounds.left;
    const y = ev.clientY - bounds.top;
    const cellX = Math.floor(x / 200) + 1;
    const cellY = Math.floor(y / 30) + 1;

    setCoord({ x: cellX, y: cellY });
    props.onSelect(cellX, cellY);
  }

  function renderCell(cell: ISheetCell) {
    return <Cell key={cell.id} data={cell} />;
  }

  function renderCells() {
    return cells.map((cell: ISheetCell) => renderCell(cell));
  }

  function renderSelect() {
    const value =
      cells.find((cell: ISheetCell) => {
        return cell.x === coord.x && cell.y === coord.y;
      })?.value ?? '';

    return (
      <SelectCell
        coord={coord}
        value={value}
        onChange={(newValue) => onChange(coord.x, coord.y, newValue)}
      />
    );
  }

  return (
    <Wrapper
      ref={ref}
      className='Spreadsheet-wrapper'
      data-testid='Spreadsheet-wrapper'
      onMouseDown={onClick}
    >
      {renderCells()}
      {renderSelect()}
    </Wrapper>
  );
}

export default Spreadsheet;
