import { actions, selectors } from '@gdi/store-base';
import { Drawer, Logger, useLogData } from '@gdi/ui';
import { useDispatch, useSelector } from '@gdi/store-base';

const now = Date.now();

export type LoggerContainerProps = {};

export function LoggerContainer(_props: LoggerContainerProps) {
  const dispatch = useDispatch();
  const showLog = useSelector(selectors.raw.$rawAppState).showLog;
  const rawLogs = useSelector(selectors.base.$logs);
  const logs = useLogData(rawLogs);

  function onClose() {
    dispatch(
      actions.appState.patch({
        showLog: false,
      })
    );
  }

  return (
    <Drawer title='Logs' open={showLog} onClose={onClose}>
      <Logger logs={logs} startTime={now} />
    </Drawer>
  );
}

export default LoggerContainer;
