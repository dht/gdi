import classnames from 'classnames';
import { useContext, useEffect, useMemo } from 'react';
import { useMeasure } from 'react-use';
import { VariableSizeGrid } from 'react-window';
import { Json } from '../../types';
import { SpreadsheetContext } from './Spreadsheet.context';
import { useArrows } from './Spreadsheet.hooks';
import { Content, Wrapper } from './Spreadsheet.style';
import Cell from './_parts/Cell/Cell';
import { get } from 'lodash';
import Header from './_parts/Header/Header';
import NewLine from './_parts/NewLine/NewLine';
import { invokeEvent } from 'shared-base';
import { useMeasureOnce } from '../../hooks/useMeasureOnce';

export type SpreadsheetProps = {
  id: string;
  data: Json;
  darkMode?: boolean;
  rowHeight?: number;
  columnWidth?: number;
  width: number;
  height: number;
};

export function Spreadsheet(props: SpreadsheetProps) {
  const { id, data, darkMode, rowHeight = 30, columnWidth = 150, width = 0, height = 0 } = props;
  const { state, callbacks } = useContext(SpreadsheetContext);
  const { config } = state;
  const { fields = [] } = config;
  const rowsPerPage = Math.floor(height / rowHeight);
  const [coord, setCoord] = useArrows(id, { x: 0, y: 0 }, { rowsPerPage, count: data.length });

  const item = useMemo(() => {
    const { y } = coord;
    const item = data[y - 2];

    if (!item) return;

    const { id } = item;
    return { id, item };
  }, [coord]);

  useEffect(() => {
    if (!callbacks.onItemAction || !item) return;
    callbacks.onItemAction(item.id, 'select', item.item);
    invokeEvent('multi/item/select', { id: item.id });
  }, [item]);

  function onClick(rowIndex: number, columnIndex: number) {
    setCoord({ x: columnIndex, y: rowIndex });
  }

  function onDoubleClick(_rowIndex: number, _columnIndex: number) {
    if (!item) return;
    setTimeout(() => {
      invokeEvent('multi/item/drillDown', { id: item.id });
    }, 150);
  }

  function onChange(id: string, change: Json) {
    if (!callbacks.onItemAction) return;
    let verb = get(change, 'id') === '' ? 'delete' : 'edit';
    callbacks.onItemAction(id, verb, change);
  }

  const className = classnames('Spreadsheet-wrapper', {
    dark: darkMode,
  });

  function renderCell(cellProps: any) {
    const { columnIndex, rowIndex, style } = cellProps;
    const isSelected = columnIndex === coord.x && rowIndex === coord.y;
    const field = fields[columnIndex];

    if (rowIndex === 0) {
      return <Header field={field} style={style} />;
    }

    if (rowIndex === 1) {
      return <NewLine field={field} style={style} />;
    }

    return (
      <Cell
        {...cellProps}
        rowIndex={rowIndex - 2}
        coord={coord}
        fields={fields}
        isSelected={isSelected}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onChange={onChange}
      />
    );
  }

  return (
    <Wrapper className={className} data-testid='Spreadsheet-wrapper'>
      <VariableSizeGrid
        columnWidth={(index: number) => get(fields, `[${index}].params.width`, columnWidth)}
        rowHeight={() => rowHeight}
        rowCount={data.length + 2}
        columnCount={fields.length}
        height={height}
        width={width}
        itemData={data}
      >
        {renderCell}
      </VariableSizeGrid>
    </Wrapper>
  );
}

export default Spreadsheet;

/*
{renderCells()}
      {renderSelect()}
*/
