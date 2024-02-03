import { selectors } from '@gdi/store-base';
import { Logger, useLogData } from '@gdi/ui';
import { useSelector } from '@gdi/store-base';

export type LoggerContainerProps = {};

const now = Date.now();

export function LoggerContainer(_props: LoggerContainerProps) {
  const rawLogs = useSelector(selectors.raw.$rawLogs);
  const logs = useLogData(rawLogs as any);

  return <Logger logs={logs} startTime={now} />;
}

export default LoggerContainer;
