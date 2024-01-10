import React from 'react';
import { Label, Wrapper } from './Checkbox.style';

export type CheckboxProps = {
  id: string;
  label: string;
  value: boolean;
};

export const Checkbox = React.forwardRef((props: CheckboxProps, forwardRef: any) => {
  const { id, label, value, ...rest } = props;

  return (
    <Wrapper className='Checkbox-wrapper' data-testid='Checkbox-wrapper'>
      <input checked={value} ref={forwardRef} id={id} {...rest} type='checkbox' />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
});

export default Checkbox;
