import classnames from 'classnames';
import React, { useRef } from 'react';
import { useKey, useMount } from 'react-use';
import { invokeEvent } from 'shared-base';
import { ICoord } from '../../../../types';
import { areaDimension } from '../../Spreadsheet.utils';
import { Wrapper } from './EditCell.style';

export type EditCellProps = {
  value: string;
  coord: ICoord;
  onChange: (value: string) => void;
  cellType: string;
};

export function EditCell(props: EditCellProps) {
  const { value, coord, cellType } = props;
  const { x, y } = coord;
  const ref = useRef<HTMLDivElement>(null);

  const style: React.CSSProperties = {
    gridArea: areaDimension(y, x, 1, 1),
  };

  function onKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
    const isArrow = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(ev.key);
    if (isArrow) {
      ev.stopPropagation();
    }
  }

  useMount(() => {
    if (!ref.current) {
      return;
    }

    ref.current.focus();

    // select all
    const range = document.createRange();
    range.selectNodeContents(ref.current);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  });

  useKey('Enter', () => {
    if (!ref.current) {
      return;
    }

    ref.current.blur();
    props.onChange(ref.current.innerText);
    invokeEvent('sheet/move/down');
  });

  useKey('Tab', () => {
    if (!ref.current) {
      return;
    }

    ref.current.blur();
    props.onChange(ref.current.innerText);
    invokeEvent('sheet/move/right');
  });

  const className = classnames('EditCell-wrapper', cellType, {});

  return (
    <Wrapper
      className={className}
      data-testid='EditCell-wrapper'
      style={style}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyDown={onKeyDown}
      ref={ref}
    >
      {value}
    </Wrapper>
  );
}

export default EditCell;
