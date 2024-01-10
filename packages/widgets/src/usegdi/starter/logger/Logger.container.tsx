import { selectors } from '@gdi/store-base';
import { Logger, useLogData } from '@gdi/ui';
import { useSelector } from '@gdi/store-base';

export type LoggerContainerProps = {};

export function LoggerContainer(_props: LoggerContainerProps) {
  const rawLogs = useSelector(selectors.raw.$rawLogs);
  const logs = useLogData(rawLogs);

  return <Logger logs={logs} />;
}

export default LoggerContainer;
