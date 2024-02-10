import React, { useState } from 'react';
import { Wrapper } from './PplSwitch.style';
import { TabsBig } from '@gdi/ui';
import { tabs } from './PplSwitch.data';

export type PplSwitchProps = {
  tabId: string;
  callbacks: {
    onChange: (value: string) => void;
  };
};

export function PplSwitch(props: PplSwitchProps) {
  const { tabId, callbacks } = props;

  return (
    <Wrapper className='PplSwitch-wrapper' data-testid='PplSwitch-wrapper'>
      <TabsBig tabs={tabs} activeTab={tabId} onChange={callbacks.onChange} />
    </Wrapper>
  );
}

export default PplSwitch;
