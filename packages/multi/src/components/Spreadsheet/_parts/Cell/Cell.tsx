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
  const { id, cellType } = field;
  const { isVirtual } = itemData;

  function onChange(value: string) {
    const change = { [id]: value };
    props.onChange(itemData.id, change);
  }

  function onDoubleClick() {
    props.onDoubleClick(rowIndex + 2, columnIndex);
  }

  function onClick() {
    props.onClick(rowIndex + 2, columnIndex);

    // manual onDoubleClick calculation
    // native "onDoubleClick" does not work as mouseDown is captured
    const delta = Date.now() - lastClickTimestamp;

    if (delta < 200) {
      onDoubleClick();
    }

    lastClickTimestamp = Date.now();
  }

  let value = Array.isArray(itemData[id]) ? itemData[id].join(', ') : itemData[id];

  switch (cellType) {
    case 'number':
      value = Number(value).toLocaleString();
      if (value === 'NaN') value = '';
      break;
  }

  const className = classnames(cellType, {
    first: columnIndex === 0,
    virtual: isVirtual,
  });

  function renderSelect() {
    if (!isSelected) return;

    const meta = {
      id,
      rowIndex,
      itemData,
    };

    return (
      <SelectCell
        {...props}
        onChange={onChange}
        value={value}
        meta={meta}
        cellType={cellType}
        isVirtual={isVirtual}
      />
    );
  }

  return (
    <Wrapper style={style} className={className} data-testid='Cell-wrapper' onMouseDown={onClick}>
      {value}
      {renderSelect()}
    </Wrapper>
  );
}

export default Cell;
