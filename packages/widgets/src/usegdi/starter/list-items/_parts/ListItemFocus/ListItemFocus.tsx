import React from 'react';
import { Wrapper } from './ListItemFocus.style';

export type ListItemFocusProps = {};

export function ListItemFocus(_props: ListItemFocusProps) {
  return (
    <Wrapper className='ListItemFocus-wrapper' data-testid='ListItemFocus-wrapper'>
      ListItemFocus
    </Wrapper>
  );
}

export default ListItemFocus;
