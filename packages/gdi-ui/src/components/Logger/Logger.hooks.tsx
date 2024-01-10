import { useMemo } from 'react';
import { sortBy } from 'shared-base';

export function useLogData(logs: Json[] = []) {
  return useMemo(() => {
    const map: Record<string, Json> = logs.sort(sortBy('timestamp')).reduce((acc, log) => {
      const { source, verb, message, data = {} } = log;
      const uniqueKey = `${source}-${verb}-${message}`;

      if (acc[uniqueKey]) {
        acc[uniqueKey].isRunning = data.isRunning;
        acc[uniqueKey].delta = log.timestamp - acc[uniqueKey].timestamp;
      } else {
        acc[uniqueKey] = log;
      }

      return acc;
    }, {});

    return Object.values(map);
  }, [logs]);
}
