import React, { useEffect } from 'react';
import { Box, Wrapper } from './Monitor.style';
import { Logger } from '@gdi/ui';
import { areaCss } from './Monitor.utils';
import { useLogs } from './Monitor.hooks';

export type MonitorProps = {};

export function Monitor(_props: MonitorProps) {
  const [logs, startTime] = useLogs();

  return (
    <Wrapper className='Monitor-wrapper' data-testid='Monitor-wrapper'>
      <Box className='box-logs' style={areaCss(1, 1, 48, 60)}>
        <Logger logs={logs} startTime={startTime} />
      </Box>
    </Wrapper>
  );
}

export default Monitor;
