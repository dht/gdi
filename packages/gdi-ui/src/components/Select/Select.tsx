import React from 'react';
import { Wrapper, Option } from './Select.style';

export type SelectProps = {
  options: Json[];
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export function Select(props: SelectProps) {
  const { options, value, placeholder } = props;

  function onChange(event: any) {
    const value = event.target.value;
    props.onChange(value);
  }

  function renderOption(option: Json) {
    const { id, text } = option;

    return (
      <Option key={option.id} className='option' value={id}>
        {text}
      </Option>
    );
  }

  function renderOptions() {
    return options.map((option: Json) => renderOption(option));
  }

  return (
    <Wrapper
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className='Select-wrapper'
      data-testid='Select-wrapper'
    >
      {renderOptions()}
    </Wrapper>
  );
}

export default Select;
