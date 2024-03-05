import React from 'react';
import { Wrapper } from './ExpressDebugger.style';
import { Scene } from 'isokit2';
import { environment } from './ExpressDebugger.environment';

export type ExpressDebuggerProps = {};

export function ExpressDebugger(_props: ExpressDebuggerProps) {
  return (
    <Wrapper className='ExpressDebugger-wrapper' data-testid='ExpressDebugger-wrapper'>
      <Scene
        isLoading={false}
        showToolbox={false}
        freeMove={false}
        hideBase
        disableGizmos
        environment={environment}
      />
    </Wrapper>
  );
}

export default ExpressDebugger;
