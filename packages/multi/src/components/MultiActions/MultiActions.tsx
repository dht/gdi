import React, { useContext } from 'react';
import { Icon, Input, Wrapper } from './MultiActions.style';
import { MultiContext } from '../Multi/Multi.context';

export type MultiActionsProps = {
  q?: string;
  callbacks: {
    onExport: () => void;
    onToggleItemActions: () => void;
    onSearch: (ev: any) => void;
  };
  children?: React.ReactNode;
};

export function MultiActions(props: MultiActionsProps) {
  const { q, callbacks } = props;

  function onKeyDown(ev: any) {
    ev.stopPropagation();
  }

  return (
    <Wrapper className='MultiActions-wrapper' data-testid='MultiActions-wrapper'>
      {props.children}
      <Icon className='material-symbols-outlined' onClick={callbacks.onToggleItemActions}>
        apps
      </Icon>
      <Icon className='material-symbols-outlined' onClick={callbacks.onExport}>
        download
      </Icon>
      <Icon className='material-symbols-outlined'>sort</Icon>
      <Input
        onChange={callbacks.onSearch}
        value={q}
        onKeyDown={onKeyDown}
        placeholder='Search...'
      />
    </Wrapper>
  );
}

export default MultiActions;
