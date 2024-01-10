import React from 'react';
import { Wrapper } from './Logger.style';
import LogLine from './_part/LogLine/LogLine';

export type LoggerProps = {
  logs: Json[];
};

export function Logger(props: LoggerProps) {
  const { logs = [] } = props;

  function renderLog(log: Json, index: number) {
    return <LogLine key={index} log={log} />;
  }

  function renderLogs() {
    return logs.map((log: Json, index) => renderLog(log, index));
  }

  return (
    <Wrapper className='Logger-wrapper' data-testid='Logger-wrapper'>
      {renderLogs()}
    </Wrapper>
  );
}

export default Logger;
