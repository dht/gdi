import React from 'react';
import { Field, Fields, Id, Key, Value, Wrapper } from './LogVector.style';
import { columns as fields } from './LogVector.data';
import { format } from '../../../../utils';

export type LogVectorProps = {
  id: string;
  values: Json;
};

export function LogVector(props: LogVectorProps) {
  const { id, values = {} } = props;
  const { ts = 0 } = values;

  function renderField(field: Json) {
    const { id, title, parser } = field;

    let value = values[id];

    if (value === undefined) {
      return null;
    }

    if (parser) {
      value = parser(value, values);
    }

    if (Array.isArray(value)) {
      value = value.map((i, index) => <span key={index}>{i}</span>);
    }

    return (
      <Field key={id}>
        <Key>{title}</Key>
        <Value>{value}</Value>
      </Field>
    );
  }

  function renderFields() {
    return Object.values(fields).map((column: Json) => renderField(column));
  }

  const tsText = ts ? ts.toFixed(2) : '';

  return (
    <Wrapper className='LogVector-wrapper' data-testid='LogVector-wrapper'>
      <Id>
        {id}
        <span>{tsText}</span>
      </Id>
      <Fields>{renderFields()}</Fields>
    </Wrapper>
  );
}

export default LogVector;
