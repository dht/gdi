import { useContext, useRef } from 'react';
import { ITableField } from '../../../../types';
import { SpreadsheetContext } from '../../Spreadsheet.context';
import { Wrapper } from './NewLine.style';
import { invokeEvent } from 'shared-base';
import { useCustomEvent } from '../../Spreadsheet.hooks';

export type NewLineProps = {
  field: ITableField;
  style?: React.CSSProperties;
};

export function NewLine(props: NewLineProps) {
  const { field, style } = props;
  const { callbacks } = useContext(SpreadsheetContext);
  const { id } = field;
  const ref = useRef<HTMLInputElement>(null);

  function onNew(ev: React.KeyboardEvent<HTMLDivElement>) {
    if (!callbacks.onItemAction) return;
    const value = ev.currentTarget.textContent;

    callbacks.onItemAction('', 'add', { data: { [id]: value } });

    ev.currentTarget.textContent = '';

    invokeEvent('sheet/item/new', { id });
  }

  // nasty hack to regain focus on new line as it is re-rendered
  // perhaps try memoizing the new line component
  useCustomEvent('sheet/newLine/focus', (ev: any) => {
    if (id !== ev.id || !ref.current) return;
    ref.current.focus();
  });

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
      ref={ref}
      style={style}
      className={`newLine-${id}`}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyDown={onKeyDown}
    />
  );
}

export default NewLine;
