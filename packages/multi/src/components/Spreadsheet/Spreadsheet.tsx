import classnames from 'classnames';
import { useContext, useEffect, useMemo } from 'react';
import { useMeasure } from 'react-use';
import { FixedSizeGrid } from 'react-window';
import { Json } from '../../types';
import { SpreadsheetContext } from './Spreadsheet.context';
import { useArrows } from './Spreadsheet.hooks';
import { Content, Wrapper } from './Spreadsheet.style';
import Cell from './_parts/Cell/Cell';
import { get } from 'lodash';
import Header from './_parts/Header/Header';
import NewLine from './_parts/NewLine/NewLine';
import { invokeEvent } from 'shared-base';

export type SpreadsheetProps = {
  id: string;
  data: Json;
  darkMode?: boolean;
  rowHeight?: number;
  columnWidth?: number;
};

export function Spreadsheet(props: SpreadsheetProps) {
  const { id, data, darkMode, rowHeight = 30, columnWidth = 150 } = props;
  const { state, callbacks } = useContext(SpreadsheetContext);
  const { config } = state;
  const { fields = [] } = config;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const rowsPerPage = Math.floor(height / rowHeight);
  const [coord, setCoord] = useArrows(id, { x: 0, y: 0 }, { rowsPerPage });

  const item = useMemo(() => {
    const { y } = coord;
    const item = data[y];

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
    const { columnIndex, rowIndex } = cellProps;
    const isSelected = columnIndex === coord.x && rowIndex === coord.y;

    return (
      <Cell
        {...cellProps}
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
      <Header fields={fields} />
      <NewLine fields={fields} />
      <Content ref={ref}>
        <FixedSizeGrid
          columnWidth={columnWidth}
          rowHeight={rowHeight}
          rowCount={data.length}
          columnCount={fields.length}
          height={height - 50}
          width={width}
          itemData={data}
        >
          {renderCell}
        </FixedSizeGrid>
      </Content>
    </Wrapper>
  );
}

export default Spreadsheet;

/*
{renderCells()}
      {renderSelect()}
*/
