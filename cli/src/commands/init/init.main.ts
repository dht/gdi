import chalk from 'chalk';
import child from 'child_process';
import fs from 'fs-extra';
import path from 'path';

export type InitParams = {
  projectName: string;
};

export const main = (params: InitParams) => {
  const { projectName } = params;

  if (fs.existsSync(projectName)) {
    console.log(chalk.red('Directory already exists'));
    return;
  }

  fs.mkdirSync(projectName);

  console.log(chalk.green('Directory created'));

  const sourcePath = path.resolve(__dirname, '../../templates/runner');

  fs.copySync(sourcePath, projectName);
  fs.mkdirSync(`${projectName}/logs`);

  fs.writeFileSync(`${projectName}/.gitignore`, 'logs\n.env\n', 'utf8');

  // init git
  console.log(chalk.green('Initializing git'));
  child.execSync('git init', { cwd: projectName });
  child.execSync('git checkout -b main', { cwd: projectName });
  child.execSync('git add .', { cwd: projectName });
  child.execSync('git commit -m "initial commit"', { cwd: projectName });

  const readmePath = `./${projectName}/README.md`;
  console.log(`\nFollow ${chalk.magenta(readmePath)} to get started with running your local GDI instance`); // prettier-ignore
};
