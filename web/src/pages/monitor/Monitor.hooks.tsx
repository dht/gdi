import { useList, useMount } from 'react-use';
import { listenToLogs } from '@gdi/firebase';
import { configureFlowAdapter } from '../../sagas/saga.gdi';
import { Json } from '../../types';
import { useEffect, useState } from 'react';

export function useLogs() {
  const [logs, { push, clear }] = useList<Json>([]);
  const [startTime, setStartTime] = useState<number>(Date.now() - 1000);

  useEffect(() => {
    const unlisten = listenToLogs((log: any) => {
      const { verb, source } = log;

      if (verb === 'clear' && source === 'gdi') {
        clear();
        setStartTime(Date.now() - 1000);
      }

      push(log);
    });

    return () => unlisten();
  }, []);

  return [logs, startTime] as [Json[], number];
}
