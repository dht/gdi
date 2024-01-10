import React, { useMemo } from 'react';
import Select from 'react-select';
import { IOption } from '../../types';
import { BigAutoCompleteProps } from '../CommandPalette/_parts/BigAutoComplete/BigAutoComplete';
import { Wrapper } from './Auto.style';

export type AutoProps = BigAutoCompleteProps & {
  value: string;
  options: Json[];
  isError?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  onChange: (items: string) => void;
  groupFieldId?: string;
};

export const Auto = React.forwardRef((props: AutoProps, ref: any) => {
  const { options, value, placeholder } = props;

  const optionsMapped = useMemo(() => {
    return options.map((option) => {
      return {
        value: option.id,
        label: option.text,
      };
    });
  }, [options]);

  function onChange(item: any) {
    props.onChange(item.value);
  }

  return (
    <Wrapper className='Auto-wrapper' data-testid='Auto-wrapper'>
      <Select
        onChange={onChange}
        options={optionsMapped}
        classNamePrefix='react-select'
        placeholder={placeholder}
        maxMenuHeight={250}
      />
    </Wrapper>
  );
});

export default Auto;
