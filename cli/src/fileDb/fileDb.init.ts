import chalk from 'chalk';
import { initDb } from './fileDb.db';

export const init = (projectRoot: string, dbPath: string) => {
  const rootPath = projectRoot + dbPath;
  console.log(`Initializing fileDb at ${chalk.magenta(dbPath)}`);
  initDb(rootPath);
};
