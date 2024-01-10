import React, { useRef } from 'react';
import { useKey, useMount } from 'react-use';
import { ICoord } from '../../Spreadsheet.types';
import { areaDimension } from '../../Spreadsheet.utils';
import { Wrapper } from './EditCell.style';

export type EditCellProps = {
  value: string;
  coord: ICoord;
  onChange: (value: string) => void;
};

export function EditCell(props: EditCellProps) {
  const { value, coord } = props;
  const { x, y } = coord;
  const ref = useRef<HTMLDivElement>(null);

  const style: React.CSSProperties = {
    gridArea: areaDimension(y, x, 1, 1),
  };

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
  });

  return (
    <Wrapper
      className='EditCell-wrapper'
      data-testid='EditCell-wrapper'
      style={style}
      contentEditable={true}
      suppressContentEditableWarning={true}
      ref={ref}
    >
      {value}
    </Wrapper>
  );
}

export default EditCell;
