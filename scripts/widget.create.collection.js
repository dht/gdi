const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');

const ROOT = path.resolve(__dirname, '../packages/widgets/src/usegdi/starter');

const input = 'reminders';
const output = 'listItems';

const cases = {
  input: {
    raw: input,
    singular: _.upperFirst(input).replace(/s$/, ''),
    component: _.upperFirst(input),
    uppercase: _.upperCase(input).replace(/S$/, ''),
  },
  output: {
    raw: output,
    singular: _.upperFirst(output).replace(/s$/, ''),
    component: _.upperFirst(output),
    uppercase: _.upperCase(output).replace(/S$/, ''),
  },
};

const paths = {
  inputRoot: `${ROOT}/${cases.input.raw}`,
  outputRoot: `${ROOT}/${cases.output.raw}`,
  parts: `${ROOT}/${cases.output.raw}/_parts`,
  multi: `${ROOT}/${cases.output.raw}/_multi`,
  summary: `${ROOT}/${cases.output.raw}/_parts/${cases.output.component}Summary`,
};

const run = async () => {
  console.time('run');

  // prepare the output folder
  if (fs.existsSync(paths.outputRoot)) {
    fs.rmdirSync(paths.outputRoot, { recursive: true });
  }

  console.time('copy dir');
  fs.copySync(paths.inputRoot, paths.outputRoot, {
    overwrite: true,
    errorOnExist: false,
  });
  console.timeEnd('copy dir');

  console.time('rename files');
  [paths.outputRoot, paths.parts, paths.multi, paths.summary].forEach((dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = `${dir}/${file}`;
      const newFilePath = filePath
        .replace(cases.input.singular, cases.output.singular)
        .replace(cases.input.singular.toLowerCase(), cases.output.singular.toLowerCase());
      fs.renameSync(filePath, newFilePath);
    });
  });
  console.timeEnd('run');

  console.time('replace content');
  [paths.outputRoot, paths.parts, paths.multi, paths.summary].forEach((dir) => {
    const files = fs.readdirSync(dir).filter((file) => {
      const filePath = `${dir}/${file}`;
      const stats = fs.statSync(filePath);
      return stats.isFile();
    });

    files.forEach((file) => {
      const filePath = `${dir}/${file}`;
      const content = fs.readFileSync(filePath, 'utf8');

      const newContent = content
        .replaceAll(cases.input.singular, cases.output.singular)
        .replaceAll(cases.input.component, cases.output.component)
        .replaceAll(cases.input.singular.toLowerCase(), cases.output.singular.toLowerCase())
        .replaceAll(cases.input.raw.toLowerCase(), cases.output.raw.toLowerCase())
        .replaceAll(cases.input.raw, cases.output.raw)
        .replaceAll(cases.input.uppercase, cases.output.uppercase);

      fs.writeFileSync(filePath, newContent, 'utf8');
    });
  });
  console.timeEnd('replace content');
};

run();
