import React, { useState } from 'react';
import { ToggleBk, ToggleId, Wrapper } from './Mock.style';
import { Toggle, Vision } from '@gdi/ui';
import { bks, ids } from './Mock.data';
import classnames from 'classnames';

export type MockProps = {};

export function Mock(_props: MockProps) {
  const [panelId, setPanelId] = useState('notes');
  const [bk, setBk] = useState('black');

  const className = classnames('Mock-wrapper', bk, {});

  function onNavigate(id: string) {
    setPanelId(id);
  }

  return (
    <Wrapper className={className} data-testid='Mock-wrapper'>
      <ToggleId>
        <Toggle options={ids} selectedId={panelId} onChange={setPanelId} />
      </ToggleId>
      <ToggleBk>
        <Toggle options={bks} selectedId={bk} onChange={setBk} />
      </ToggleBk>
      <Vision panelId={panelId} bk={bk} onNavigate={onNavigate} />
    </Wrapper>
  );
}

export default Mock;
