import TransportStream from 'winston-transport';
import { getDbAdapter } from '../globals';
import { cleanObject } from '../object';

export class DbTransport extends TransportStream {
  public req: any;

  constructor(opts: any) {
    super(opts);
  }

  log(info: Json) {
    const dbAdapter = getDbAdapter();

    if (!dbAdapter) return;

    const { level, message, timestamp, ...rest } = info;

    const data = cleanObject(rest);

    dbAdapter.addLog(this.req, {
      level,
      message,
      timestamp,
      ...data,
    });
  }
}
