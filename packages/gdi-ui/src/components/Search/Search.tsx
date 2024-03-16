import React from 'react';
import { Cta, Input, Wrapper } from './Search.style';
import Icon from '../Icon/Icon';

export type SearchProps = {
  value?: string;
  onChange: (value: string) => void;
};

export function Search(props: SearchProps) {
  const { value } = props;

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(event.target.value);
  }

  return (
    <Wrapper className='Search-wrapper' data-testid='Search-wrapper'>
      <Input placeholder='Search a board...' value={value} onChange={onChange} />
      <Cta>
        <Icon name='Search' size={16} color='white' />
      </Cta>
    </Wrapper>
  );
}

export default Search;
