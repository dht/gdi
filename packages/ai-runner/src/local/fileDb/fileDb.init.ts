import kleur from 'kleur';
import { initDb } from './fileDb.db';

export const init = (projectRoot: string, dbPath: string) => {
  console.log('1 ->', 1);

  const rootPath = projectRoot + dbPath;
  console.log(`Initializing fileDb at ${kleur.magenta(dbPath)}`);
  initDb(rootPath);
};
