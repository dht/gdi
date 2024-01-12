import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { getOutputPath, replaceTemplatePlaceholder } from './component.utils';

export type ComponentParams = {
  componentNames: string[];
};

export const main = (params: ComponentParams) => {
  const { componentNames } = params;

  const res = getOutputPath();

  if (!res.isValid) {
    console.log(chalk.red(res.message));
    return;
  }

  const { value: outputPath } = res;

  for (let componentName of componentNames) {
    createComponent(componentName, outputPath);
  }
};

export const createComponent = (componentName: string, outputPath: string) => {
  console.log(`Creating component ${chalk.magenta(componentName)}...`);

  const sourcePath = path.resolve(__dirname, '../../templates/component');
  const destPath = path.resolve(outputPath, componentName);

  if (fs.existsSync(destPath)) {
    console.log(chalk.red('Component already exists, skipping...'));
    return;
  }

  fs.copySync(sourcePath, destPath);

  const files = fs.readdirSync(destPath);

  for (let file of files) {
    const filePath = path.resolve(destPath, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const newFilePath = filePath.replace(/componentName/g, componentName);

    const newFileContents = replaceTemplatePlaceholder(fileContents, componentName); // prettier-ignore

    fs.writeFileSync(newFilePath, newFileContents, 'utf8');

    if (filePath !== newFilePath) {
      fs.unlinkSync(filePath);
    }
  }

  console.log(chalk.green('Component created'));
};
