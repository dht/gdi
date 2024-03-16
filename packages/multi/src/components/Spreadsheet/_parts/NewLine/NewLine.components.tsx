import React from 'react';
import { Wrapper, Field } from './NewLine.style';
import { ITableField } from '../../../../types';
import { Json } from 'redux-store-generator';

export type NewLineFieldProps = {
  field: ITableField;
  onNew: (data: Json) => void;
};

export function NewLineField(props: NewLineFieldProps) {
  const { field } = props;
  const { id } = field;

  function onNew(ev: React.KeyboardEvent<HTMLDivElement>) {
    const value = ev.currentTarget.textContent;
    props.onNew({ [id]: value });
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

  return (
    <Field
      className='field'
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyDown={onKeyDown}
      onBlur={onNew}
    />
  );
}
