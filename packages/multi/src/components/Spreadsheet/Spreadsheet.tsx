import classnames from 'classnames';
import { useContext, useEffect } from 'react';
import { useMeasure } from 'react-use';
import { FixedSizeGrid } from 'react-window';
import { Json } from '../../types';
import { SpreadsheetContext } from './Spreadsheet.context';
import { useArrows } from './Spreadsheet.hooks';
import { Content, Wrapper } from './Spreadsheet.style';
import Cell from './_parts/Cell/Cell';
import { get } from 'lodash';
import Header from './_parts/Header/Header';

export type SpreadsheetProps = {
  data: Json;
  onChange: (x: number, y: number, value: string) => void;
  darkMode?: boolean;
  rowHeight?: number;
  columnWidth?: number;
};

export function Spreadsheet(props: SpreadsheetProps) {
  const { data, darkMode, rowHeight = 30, columnWidth = 150 } = props;
  const { state, callbacks } = useContext(SpreadsheetContext);
  const { config } = state;
  const { fields = [] } = config;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const rowsPerPage = Math.floor(height / rowHeight);
  const [coord, setCoord] = useArrows({ x: 0, y: 0 }, { rowsPerPage });

  useEffect(() => {}, [coord]);

  function onClick(rowIndex: number, columnIndex: number) {
    setCoord({ x: columnIndex, y: rowIndex });
  }

  function onChange(id: string, change: Json) {
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
        onChange={onChange}
      />
    );
  }

  return (
    <Wrapper className={className} data-testid='Spreadsheet-wrapper'>
      <Header fields={fields} />
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
