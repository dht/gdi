import React from 'react';
import { LabelText, Wrapper } from './Label.style';
import { IFormField } from '../Form/Form.types';
import classnames from 'classnames';

export type LabelProps = {
  field: IFormField;
  isError?: boolean;
  tooltip?: string;
};

export function Label(props: LabelProps) {
  const { field, isError } = props;
  const { label, fieldType } = field;

  if (['checkbox'].includes(fieldType)) {
    return null;
  }

  const className = classnames('Label-wrapper', fieldType, {
    error: isError,
  });

  return (
    <Wrapper className={className} data-testid='Label-wrapper'>
      <LabelText>{label}</LabelText>
    </Wrapper>
  );
}

export default Label;
