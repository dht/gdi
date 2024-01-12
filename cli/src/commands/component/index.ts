import chalk from 'chalk';
import { ComponentParams, main } from './component.main';
import { validateArgs } from './component.validate';

export const run = (componentNames: string[]) => {
  const valid = validateArgs(componentNames);

  if (!valid.isValid) {
    console.log(chalk.red(valid.message));
    return;
  }

  console.table({
    name: componentNames.join(', '),
    action: 'initialize components',
  });

  const params: ComponentParams = {
    componentNames,
  };

  main(params);
};
