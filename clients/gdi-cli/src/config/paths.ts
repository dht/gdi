import { homedir } from 'os';

export const CLI_DB_PATH = '~/.gdi-cli/db.json'.replace('~', homedir());
