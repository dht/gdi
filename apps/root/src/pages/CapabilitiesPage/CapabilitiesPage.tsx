import React, { useState } from 'react';
import { Wrapper } from './CapabilitiesPage.style';
import { TabsBig } from '@gdi/ui';
import { tabs } from './CapabilitiesPage.data';
import MuxCapabilities from '../../components/MuxCapabilities/MuxCapabilities';
import MuxCapabilitiesContainer from '../../components/MuxCapabilities/MuxCapabilities.container';
import MuxApisContainer from '../../components/MuxApis/MuxApis.container';
export type CapabilitiesPageProps = {};

export function CapabilitiesPage(_props: CapabilitiesPageProps) {
  const [activeTab, setActiveTab] = useState('capabilities');

  function renderInner() {
    if (activeTab === 'capabilities') {
      return <MuxCapabilitiesContainer />;
    } else {
      return <MuxApisContainer />;
    }
  }

  return (
    <Wrapper
      className='CapabilitiesPage-wrapper'
      data-testid='CapabilitiesPage-wrapper'
    >
      <TabsBig
        tabs={tabs}
        activeTab={activeTab}
        onChange={(tab: string) => setActiveTab(tab)}
      />
      {renderInner()}
    </Wrapper>
  );
}

export default CapabilitiesPage;
