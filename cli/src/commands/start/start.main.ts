import { startExpress } from '@gdi/ai-runner';
import chalk from 'chalk';
import fs from 'fs-extra';
import _ from 'lodash';
import path from 'path';
import { filterAllowedDomains, parseEnv, validateKeys } from './start.utils';

export type StartParams = {};

export const main = () => {
  const envPath = path.resolve(process.cwd(), '.env');
  const configPath = path.resolve(process.cwd(), 'config.json');

  if (!fs.existsSync(configPath)) {
    console.log(chalk.red('No config.json file found.'));
    return;
  }

  if (!fs.existsSync(envPath)) {
    console.log(chalk.red('No .env file found.'));
    return;
  }

  const config = fs.readJsonSync(configPath);
  const port = _.get(config, 'port', 3005);
  const allowedDomains = _.get(config, 'allowedDomains', {});

  const filtered = filterAllowedDomains(allowedDomains);

  if (_.isEmpty(filtered)) {
    console.log(chalk.red('No allowedDomains found in config.json.'));
    return;
  }

  const envRaw = fs.readFileSync(envPath, 'utf8');
  const apiKeys = parseEnv(envRaw);

  const res = validateKeys(apiKeys);

  if (!res.isValid) {
    console.log(chalk.red(res.message));
    return;
  }

  console.table({
    action: 'start instance',
    ...filtered,
    port,
  });

  startExpress({
    port,
    apiKeys,
    allowedDomains,
  });
};
