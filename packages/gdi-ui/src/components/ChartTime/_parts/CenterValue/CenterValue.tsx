import React from 'react';
import { Label, Value, Wrapper } from './CenterValue.style';

export type CenterValueProps = {
  label: string;
  value: string;
};

export function CenterValue(props: CenterValueProps) {
  const { label, value } = props;

  return (
    <Wrapper className='CenterValue-wrapper' data-testid='CenterValue-wrapper'>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Wrapper>
  );
}

export default CenterValue;
