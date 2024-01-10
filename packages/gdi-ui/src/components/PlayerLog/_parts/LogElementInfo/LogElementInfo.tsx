import React from 'react';
import { Id, Wrapper } from './LogElementInfo.style';
import LogVector from '../LogVector/LogVector';

export type LogElementInfoProps = {
  info: Json;
};

export function LogElementInfo(props: LogElementInfoProps) {
  const { info } = props;
  const { id } = info;

  function renderGroup(groupId: string) {
    return <LogVector key={groupId} id={groupId} values={info[groupId]} />;
  }

  function renderGroups() {
    return ['values', 'sampled', 'from', 'to'].map((group) => renderGroup(group));
  }

  return (
    <Wrapper className='LogElementInfo-wrapper' data-testid='LogElementInfo-wrapper'>
      <Id>{id}</Id>
      {renderGroups()}
    </Wrapper>
  );
}

export default LogElementInfo;
