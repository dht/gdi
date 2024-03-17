import React from 'react';
import classnames from 'classnames';
import { Item, Wrapper } from './RadioFilter.style';
import { IOption } from '../../types';

export type RadioFilterProps = {
  options: IOption[];
  value: string[];
  onChange: (value: string) => void;
};

export function RadioFilter(props: RadioFilterProps) {
  const { options = [], value = [] } = props;

  function renderOption(option: Json) {
    const { id, name } = option;

    const className = classnames('option', {
      selected: value.includes(id),
      current: option.isCurrent,
    });

    return (
      <Item key={option.id} className={className} onClick={() => props.onChange(option.id)}>
        {name}
      </Item>
    );
  }

  function renderOptions() {
    return options.map((option: Json) => renderOption(option));
  }

  return (
    <Wrapper className='RadioFilter-wrapper' data-testid='RadioFilter-wrapper'>
      {renderOptions()}
    </Wrapper>
  );
}

export default RadioFilter;
