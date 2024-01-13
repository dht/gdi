import { initRunner } from '@gdi/ai-runner';
import chalk from 'chalk';
import fs from 'fs-extra';
import _ from 'lodash';
import path from 'path';
import { filterAllowedDomains, parseEnv, validateKeys } from './start.utils';
import { Json } from '../../types';

export type StartParams = {};

export const preRun = () => {
  const output: Json = {
    isOk: false,
  };

  const rootPath = path.resolve(process.cwd());
  const envPath = rootPath + '/.env';
  const configPath = rootPath + '/config.json';

  if (!fs.existsSync(configPath)) {
    console.log(chalk.red('No config.json file found.'));
    return output;
  }

  if (!fs.existsSync(envPath)) {
    console.log(chalk.red('No .env file found.'));
    return output;
  }

  const config = fs.readJsonSync(configPath);
  const port = _.get(config, 'port', 3005);
  const allowedDomains = _.get(config, 'allowedDomains', {});

  const filtered = filterAllowedDomains(allowedDomains);

  if (_.isEmpty(filtered)) {
    console.log(chalk.red('No allowedDomains found in config.json.'));
    return output;
  }

  const envRaw = fs.readFileSync(envPath, 'utf8');
  const apiKeys = parseEnv(envRaw);

  const res = validateKeys(apiKeys);

  if (!res.isValid) {
    console.log(chalk.red(res.message));
    return output;
  }

  console.table({
    action: 'start instance',
    ...filtered,
    port,
  });

  output.isOk = true;
  output.rootPath = rootPath;
  output.apiKeys = apiKeys;
  output.allowedDomains = allowedDomains;
  output.port = port;

  return output;
};
