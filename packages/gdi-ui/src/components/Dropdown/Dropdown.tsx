import React from 'react';
import { Wrapper, Select } from './Dropdown.style';
import { IOption } from '../../types';

export type DropdownProps = {
  value: string;
  onChange: (event: any) => void;
  options: IOption[];
  placeholder?: string;
  isDisabled?: boolean;
  isError?: boolean;
  height?: number;
};

export const Dropdown = React.forwardRef((props: DropdownProps, ref: any) => {
  const { options = [], placeholder, isDisabled, isError, height, value, ...rest } = props;

  function renderOption(option: IOption) {
    return (
      <option key={option.id} value={option.id}>
        {option.text}
      </option>
    );
  }

  function renderOptions() {
    return options.map((option: IOption) => renderOption(option));
  }

  function renderValue(id: any) {
    const option = options.find((option) => option.id === id);

    if (!option) {
      return <>{placeholder}</>;
    }

    return <>{option.text}</>;
  }

  return (
    <Wrapper className='Dropdown-wrapper' data-testid='Dropdown-wrapper'>
      <Select ref={ref} value={value || ''} {...rest} disabled={isDisabled}>
        {renderOptions()}
      </Select>
    </Wrapper>
  );
});

export default Dropdown;
