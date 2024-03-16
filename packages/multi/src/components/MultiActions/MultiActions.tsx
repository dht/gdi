import React, { useContext } from 'react';
import { Icon, Input, Wrapper } from './MultiActions.style';
import { MultiContext } from '../Multi/Multi.context';
import { downloadCsv } from 'shared-base';
import { fields } from './MultiActions.data';

export type MultiActionsProps = {
  children?: React.ReactNode;
};

export function MultiActions(props: MultiActionsProps) {
  const { state, data, callbacks } = useContext(MultiContext);
  const { q } = state;

  function onChange(ev: any) {
    const value = ev.target.value;
    ev.stopPropagation();
    callbacks.onSearch(value);
  }

  function onExport() {
    downloadCsv('export.csv', fields, data);
  }

  function onKeyDown(ev: any) {
    ev.stopPropagation();
  }

  return (
    <Wrapper className='MultiActions-wrapper' data-testid='MultiActions-wrapper'>
      {props.children}
      <Icon className='material-symbols-outlined' onClick={onExport}>
        download
      </Icon>
      <Icon className='material-symbols-outlined'>sort</Icon>
      <Input onChange={onChange} value={q} onKeyDown={onKeyDown} placeholder='Search...' />
    </Wrapper>
  );
}

export default MultiActions;
