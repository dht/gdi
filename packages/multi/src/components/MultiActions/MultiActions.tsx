import React, { useContext, useRef } from 'react';
import { Icon, Input, Wrapper } from './MultiActions.style';
import { MultiContext } from '../Multi/Multi.context';
import { useKey } from 'react-use';

export type MultiActionsProps = {
  q?: string;
  callbacks: {
    onExport: () => void;
    onToggleItemActions: () => void;
    onSearch: (ev: any) => void;
    onFocus: () => void;
  };
  showFocus?: boolean;
  children?: React.ReactNode;
};

export function MultiActions(props: MultiActionsProps) {
  const { q, callbacks, showFocus } = props;
  const ref = useRef<HTMLInputElement>(null);

  function onKeyDown(ev: any) {
    ev.stopPropagation();
  }

  useKey(
    'f',
    (ev) => {
      if (!ref.current || !ev.metaKey) return;
      ev.preventDefault();
      ref.current.focus();
    },
    {},
    [ref]
  );

  return (
    <Wrapper className='MultiActions-wrapper' data-testid='MultiActions-wrapper'>
      {props.children}
      {showFocus && (
        <Icon className='material-symbols-outlined' onClick={callbacks.onFocus}>
          filter_center_focus
        </Icon>
      )}
      <Icon className='material-symbols-outlined' onClick={callbacks.onToggleItemActions}>
        apps
      </Icon>
      <Icon className='material-symbols-outlined' onClick={callbacks.onExport}>
        download
      </Icon>
      <Icon className='material-symbols-outlined'>sort</Icon>
      <Input
        ref={ref}
        onChange={callbacks.onSearch}
        value={q}
        onKeyDown={onKeyDown}
        placeholder='Search...'
      />
    </Wrapper>
  );
}

export default MultiActions;
