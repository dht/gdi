import winston, { format } from 'winston';
import path from 'path';
import fs from 'fs-extra';

// const pathLogs = path.resolve(__dirname, '../../logs');
// fs.ensureDirSync(pathLogs);

const myFormat = format.printf((info) => {
  const { level, message, label = '', timestamp } = info;

  return [timestamp, label ? `[${label}]` : '', level ? `${level}:` : '', message]
    .filter((i) => i)
    .join(' ');
});

export const logger = winston.createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), myFormat),
  defaultMeta: {},
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    // new winston.transports.File({ filename: pathLogs + '/error.log', level: 'error' }),
    // new winston.transports.File({ filename: pathLogs + '/combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

logger.log('info', 'session started');
