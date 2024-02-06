import React from 'react';
import { Option, Wrapper } from './Toggle.style';
import classnames from 'classnames';

export type ToggleProps = {
  options: string[];
  selectedId: string;
  onChange: (id: string) => void;
};

export function Toggle(props: ToggleProps) {
  const { options, selectedId } = props;

  function renderOption(option: string) {
    const className = classnames('option', {
      selected: option === selectedId,
    });

    return (
      <Option key={option} className={className} onClick={() => props.onChange(option)}>
        {option}
      </Option>
    );
  }

  function renderOptions() {
    return options.map((option: string) => renderOption(option));
  }

  return (
    <Wrapper className='Toggle-wrapper' data-testid='Toggle-wrapper'>
      {renderOptions()}
    </Wrapper>
  );
}

export default Toggle;
