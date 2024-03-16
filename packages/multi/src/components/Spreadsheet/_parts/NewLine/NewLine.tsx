import React, { useContext } from 'react';
import { Wrapper, Field } from './NewLine.style';
import { ITableField, Json } from '../../../../types';
import { NewLineField } from './NewLine.components';
import { SpreadsheetContext } from '../../Spreadsheet.context';

export type NewLineProps = {
  fields: ITableField[];
};

export function NewLine(props: NewLineProps) {
  const { fields } = props;
  const { callbacks } = useContext(SpreadsheetContext);

  function onNew(data: Json) {
    if (!callbacks.onItemAction) return;

    callbacks.onItemAction('', 'add', { data });
  }

  function renderField(field: ITableField) {
    const { id } = field;

    if (id === 'id') {
      return <Field key={id}>+</Field>;
    }

    return <NewLineField key={id} field={field} onNew={onNew} />;
  }

  function renderFields() {
    return fields.map((field: ITableField) => renderField(field));
  }

  return (
    <Wrapper className='NewLine-wrapper' data-testid='NewLine-wrapper'>
      {renderFields()}
    </Wrapper>
  );
}

export default NewLine;
