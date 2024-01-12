import fs from 'fs-extra';
import path from 'path';
import _ from 'lodash';

export const getOutputPath = () => {
  const output = {
    isValid: true,
    message: '',
    value: '',
  };

  const layoutConfigPath = path.resolve(process.cwd(), '.layout.json');

  if (!fs.existsSync(layoutConfigPath)) {
    output.isValid = false;
    output.message = 'No .layout.json file found.';

    return output;
  }

  const layoutConfig = fs.readJsonSync(layoutConfigPath);
  output.value = layoutConfig.path;

  return output;
};

export const replaceTemplatePlaceholder = (
  content: string,
  componentName: string
) => {
  return content
    .replace(/\$CMPKebabcase/g, _.kebabCase(componentName))
    .replace(/\$CMP/g, componentName);
};
