import React from 'react';
import { Label, Wrapper } from './Checkbox.style';

export type CheckboxProps = {
  id: string;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

export const Checkbox = React.forwardRef((props: CheckboxProps, forwardRef: any) => {
  const { id, label, value, onChange, ...rest } = props;

  function onClick(e: React.ChangeEvent<HTMLInputElement>) {
    if (!onChange) {
      return;
    }

    onChange(e.target.checked);
  }

  return (
    <Wrapper className='Checkbox-wrapper' data-testid='Checkbox-wrapper'>
      <input
        checked={value}
        ref={forwardRef}
        id={id}
        {...rest}
        type='checkbox'
        onChange={onClick}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
});

export default Checkbox;
