import React from 'react';
import { Wrapper } from './LogsPage.style';
import { Drawer, Logger, useLogData } from '@gdi/ui';

export type LogsPageProps = {
  logs: Json[];
  tsStart: number;
};

export function LogsPage(props: LogsPageProps) {
  const { logs, tsStart } = props;

  return (
    <Wrapper className='LogsPage-wrapper' data-testid='LogsPage-wrapper'>
      <Logger logs={logs} startTime={tsStart} />
    </Wrapper>
  );
}

export default LogsPage;
