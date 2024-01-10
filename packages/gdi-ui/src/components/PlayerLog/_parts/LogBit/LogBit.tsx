import React from 'react';
import { Field, Key, Value, Wrapper } from './LogBit.style';

export type LogBitProps = {
  bit: Json;
};

export function LogBit(props: LogBitProps) {
  const { bit = {} } = props;

  function renderField(field: string) {
    let value = bit[field];

    if (typeof value === 'number') {
      value = value.toFixed(2);
    }

    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    return (
      <Field key={field} className='field'>
        <Key>{field}</Key>
        <Value title={value} onClick={() => console.log(value)}>
          {value}
        </Value>
      </Field>
    );
  }

  function renderFields() {
    return ['id', 'start', 'end', 'elements'].map((field: string) => renderField(field));
  }

  return (
    <Wrapper className='LogBit-wrapper' data-testid='LogBit-wrapper'>
      {renderFields()}
    </Wrapper>
  );
}

export default LogBit;
