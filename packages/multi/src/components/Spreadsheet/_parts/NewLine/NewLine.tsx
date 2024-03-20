import { useContext } from 'react';
import { ITableField } from '../../../../types';
import { SpreadsheetContext } from '../../Spreadsheet.context';
import { Wrapper } from './NewLine.style';

export type NewLineProps = {
  field: ITableField;
  style?: React.CSSProperties;
};

export function NewLine(props: NewLineProps) {
  const { field, style } = props;
  const { callbacks } = useContext(SpreadsheetContext);
  const { id } = field;

  function onNew(ev: React.KeyboardEvent<HTMLDivElement>) {
    if (!callbacks.onItemAction) return;
    const value = ev.currentTarget.textContent;

    callbacks.onItemAction('', 'add', { data: { [id]: value } });

    ev.currentTarget.textContent = '';
  }

  function onKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
    ev.stopPropagation();

    if (ev.key === 'Tab' || ev.key === 'Enter') {
      ev.preventDefault();
    }

    if (ev.key !== 'Enter') return;

    onNew(ev);
  }

  if (id === 'id') {
    return <Wrapper style={style}>+</Wrapper>;
  }

  return (
    <Wrapper
      style={style}
      className='field'
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyDown={onKeyDown}
      onBlur={onNew}
    />
  );
}

export default NewLine;
