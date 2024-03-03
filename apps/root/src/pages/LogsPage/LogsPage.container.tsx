import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useLogData } from '@gdi/ui';
import LogsPage from './LogsPage';

export type LogsPageContainerProps = {};

export function LogsPageContainer(_props: LogsPageContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const rawLogs = useSelector(selectors.base.$logs);

  const { tsStart } = appState;

  const logs = useLogData(rawLogs);

  return <LogsPage logs={logs} tsStart={tsStart} />;
}

export default LogsPageContainer;
