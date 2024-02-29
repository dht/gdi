import React from 'react';
import { Field, Label, Value, Wrapper } from './JsonGrid.style';

export type JsonGridProps = {
  data: Json;
};

export function JsonGrid(props: JsonGridProps) {
  const { data } = props;

  function renderField(field: string) {
    return (
      <Field key={field} className='field'>
        <Label>{field}</Label>
        <Value>{data[field]}</Value>
      </Field>
    );
  }

  function renderFields() {
    return Object.keys(data).map((field: string) => renderField(field));
  }

  return (
    <Wrapper className='JsonGrid-wrapper' data-testid='JsonGrid-wrapper'>
      {renderFields()}
    </Wrapper>
  );
}

export default JsonGrid;
