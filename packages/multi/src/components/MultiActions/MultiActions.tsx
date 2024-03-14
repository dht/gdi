import React, { useContext } from 'react';
import { Icon, Input, Wrapper } from './MultiActions.style';
import { MultiContext } from '../Multi/Multi.context';

export type MultiActionsProps = {};

export function MultiActions(_props: MultiActionsProps) {
  const { state, callbacks } = useContext(MultiContext);
  const { q } = state;

  function onChange(ev: any) {
    const value = ev.target.value;
    ev.stopPropagation();
    callbacks.onSearch(value);
  }

  function onKeyDown(ev: any) {
    ev.stopPropagation();
  }

  return (
    <Wrapper className='MultiActions-wrapper' data-testid='MultiActions-wrapper'>
      <Icon className='material-symbols-outlined'>sort</Icon>
      <Input onChange={onChange} onKeyDown={onKeyDown} placeholder='Search...' />
    </Wrapper>
  );
}

export default MultiActions;
