import React, { useState } from 'react';
import { Search, Wrapper } from './MusicSearch.style';
import { Button } from '@gdi/ui';
import { useKey } from 'react-use';

export type MusicSearchProps = {
  onSearch: (q: string) => void;
};

export function MusicSearch(props: MusicSearchProps) {
  const [q, setQ] = useState('');

  function onChange(ev: any) {
    setQ(ev.target.value);
  }

  function onSearch() {
    props.onSearch(q);
  }

  function onKeyDown(ev: any) {
    if (ev.key === 'Enter') {
      onSearch();
    }
  }

  return (
    <Wrapper className='MusicSearch-wrapper' data-testid='MusicSearch-wrapper'>
      <Search placeholder='Search music...' onChange={onChange} onKeyDown={onKeyDown} />
      <Button onClick={onSearch}>Search</Button>
    </Wrapper>
  );
}

export default MusicSearch;
