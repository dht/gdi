import classnames from 'classnames';
import { CSSProperties } from 'styled-components';
import { ICoord, ITableField, Json } from '../../../../types';
import { Wrapper } from './Cell.style';
import SelectCell from '../SelectCell/SelectCell';
import { useMount } from 'react-use';

export type CellProps = {
  style: CSSProperties;
  columnIndex: number;
  rowIndex: number;
  data: Json;
  coord: ICoord;
  fields: ITableField[];
  isSelected: boolean;
  onClick: (rowIndex: number, columnIndex: number) => void;
  onChange: (id: string, change: Json) => void;
};

export function Cell(props: CellProps) {
  const { style, columnIndex, rowIndex, data, fields, isSelected } = props;
  const itemData = data[rowIndex];
  const field = fields[columnIndex];
  const { id } = field;

  function onChange(value: string) {
    const change = { [id]: value };
    props.onChange(itemData.id, change);
  }

  function onClick() {
    props.onClick(rowIndex, columnIndex);
  }

  const value = Array.isArray(itemData[id]) ? itemData[id].join(', ') : itemData[id];

  const className = classnames({
    first: columnIndex === 0,
  });

  function renderSelect() {
    if (!isSelected) return;

    const meta = {
      id,
      rowIndex,
      itemData,
    };

    return <SelectCell {...props} onChange={onChange} value={value} meta={meta} />;
  }

  return (
    <Wrapper style={style} className={className} data-testid='Cell-wrapper' onMouseDown={onClick}>
      {value}
      {renderSelect()}
    </Wrapper>
  );
}

export default Cell;
