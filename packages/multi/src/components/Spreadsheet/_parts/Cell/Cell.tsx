import classnames from 'classnames';
import { CSSProperties } from 'styled-components';
import { ICoord, ITableField, Json } from '../../../../types';
import { Wrapper } from './Cell.style';
import SelectCell from '../SelectCell/SelectCell';
import { useMount } from 'react-use';
import { useRef } from 'react';

export type CellProps = {
  style: CSSProperties;
  columnIndex: number;
  rowIndex: number;
  data: Json;
  coord: ICoord;
  fields: ITableField[];
  isSelected: boolean;
  onClick: (rowIndex: number, columnIndex: number) => void;
  onDoubleClick: (rowIndex: number, columnIndex: number) => void;
  onChange: (id: string, change: Json) => void;
};

let lastClickTimestamp = 0;

export function Cell(props: CellProps) {
  const { style, columnIndex, rowIndex, data, fields, isSelected } = props;
  const itemData = data[rowIndex];
  const field = fields[columnIndex];
  const { id } = field;

  function onChange(value: string) {
    const change = { [id]: value };
    props.onChange(itemData.id, change);
  }

  function onDoubleClick() {
    props.onDoubleClick(rowIndex, columnIndex);
  }

  function onClick() {
    props.onClick(rowIndex, columnIndex);

    // manual onDoubleClick calculation
    // native "onDoubleClick" does not work as mouseDown is captured
    const delta = Date.now() - lastClickTimestamp;

    if (delta < 200) {
      onDoubleClick();
    }

    lastClickTimestamp = Date.now();
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
