import React from 'react';
import { Field, Wrapper } from './Header.style';
import { ITableField } from '../../../../types';

export type HeaderProps = {
  fields: ITableField[];
};

export function Header(props: HeaderProps) {
  const { fields } = props;

  function renderField(field: ITableField) {
    const { title } = field;

    return (
      <Field key={field.id} className='field'>
        {title}
      </Field>
    );
  }

  function renderFields() {
    return fields.map((field: ITableField) => renderField(field));
  }
  return (
    <Wrapper className='Header-wrapper' data-testid='Header-wrapper'>
      {renderFields()}
    </Wrapper>
  );
}

export default Header;
