import winston, { format } from 'winston';
import path from 'path';
import fs from 'fs-extra';
import { transports } from './transports';
import { formatters } from './formatters';

export const initLogger = () => {
  const pathLogs = path.resolve(__dirname, '../../logs');
  fs.ensureDirSync(pathLogs);

  const logger = winston.createLogger({
    format: winston.format.combine(
      //
      winston.format.timestamp(),
      winston.format.json()
    ),
    defaultMeta: {},
    transports: [
      new transports.Db({
        level: 'info',
      }),
      new transports.Db({
        level: 'error',
      }),
      new winston.transports.File({
        format: format.combine(format.timestamp(), formatters.log),
        filename: pathLogs + '/error.log',
        level: 'error',
      }),
      new winston.transports.File({
        format: format.combine(format.timestamp(), formatters.log),
        filename: pathLogs + '/combined.log',
      }),
    ],
  });

  if (process.env.NODE_ENV !== 'production') {
    logger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }

  return logger;
};
