import chalk from 'chalk';
import { InitParams, main } from './init.main';
import { validateArgs } from './init.validate';

export const run = (args: string[]) => {
  const valid = validateArgs(args);

  if (!valid.isValid) {
    console.log(chalk.red(valid.message));
    return;
  }

  const [projectName] = args;

  console.table({
    name: projectName,
    action: 'initialize instance',
  });

  const params: InitParams = {
    projectName,
  };

  main(params);
};
