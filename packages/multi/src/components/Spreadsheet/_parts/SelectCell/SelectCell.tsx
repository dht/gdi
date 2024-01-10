import React, { useEffect } from 'react';
import { useKey, useToggle } from 'react-use';
import { ICoord } from '../../Spreadsheet.types';
import { areaDimension } from '../../Spreadsheet.utils';
import { EditCell } from '../EditCell/EditCell';
import { useAlphaNumericKey } from './SelectCell.hooks';
import { Wrapper } from './SelectCell.style';

export type SelectCellProps = {
  value: string;
  coord: ICoord;
  onChange: (newValue: string) => void;
};

export function SelectCell(props: SelectCellProps) {
  const { value, coord } = props;
  const { x, y } = coord;
  const [isEditing, toggleIsEditing] = useToggle(false);

  function onChange(newValue: string) {
    toggleIsEditing(false);
    props.onChange(newValue);
  }

  const style: React.CSSProperties = {
    gridArea: areaDimension(y, x, 1, 1),
  };

  useEffect(() => {
    toggleIsEditing(false);
  }, [coord]);

  useKey('F2',() => {toggleIsEditing()}, {} ,[isEditing]); // prettier-ignore
  useKey('Escape',() => { toggleIsEditing(false)}, {}, [isEditing]); // prettier-ignore
  useKey('Delete',() => { props.onChange('')}, {}, [coord]); // prettier-ignore

  useAlphaNumericKey(
    (_event: KeyboardEvent) => {
      if (isEditing) {
        return;
      }

      toggleIsEditing(true);
    },
    [isEditing]
  );

  if (isEditing) {
    return <EditCell value={value} coord={coord} onChange={onChange} />;
  }

  return <Wrapper className='SelectCell-wrapper' data-testid='SelectCell-wrapper' style={style} />;
}

export default SelectCell;
