import { delay, guid4, invokeEvent } from 'shared-base';
import { GdiLog } from '../types';

export const l = async (logData: Partial<GdiLog>) => {
  const log: GdiLog = {
    id: guid4(),
    source: 'gdi',
    timestamp: Date.now(),
    verb: '',
    message: '',
    data: {},
    ...logData,
  };

  await delay(10);

  invokeEvent('gdi/log', log);
};
