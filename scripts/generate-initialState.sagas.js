const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const prettier = require('prettier');

const cwd = path.resolve(process.cwd() + '/..');
const OUTPUT_PATH = `${cwd}/packages/store-base/src/initialState.sagas.ts`;

const getMatches = (content, regex) => {
  const matches = [];

  let match;
  while ((match = regex.exec(content)) !== null) {
    matches.push(match[1]);
  }

  return matches;
};

const run = async () => {
  console.time('generate');

  const output = {};

  glob
    .sync(['packages/**/*.ts', 'web/**/*.ts'], {
      cwd,
      ignore: '**/node_modules/**',
    })
    .map((file) => {
      return {
        file,
        content: fs.readFileSync(`${cwd}/${file}`, 'utf8'),
      };
    })
    .forEach(({ content }) => {
      const regexSaga = /export const saga[^=s]+= (\{[^;]+);/g;

      const match = getMatches(content, regexSaga)[0];
      if (!match) {
        return;
      }

      const regexId = /id: '([^']+)'/g;
      const id = getMatches(match, regexId)[0];
      const item = match //
        .replace(/root: root,\n/g, '')
        .replace(/\n/g, '\n  ');

      output[id] = item;
    });

  const keys = Object.keys(output).sort();

  const content = keys.map((key) => {
    return `  '${key}': ${output[key]}`;
  });

  const code = await prettier.format(
    `import { ISagas } from './types';

  export const sagas: ISagas = {\n${content}\n};`,
    {
      parser: 'typescript',
      trailingComma: 'es5',
      tabWidth: 2,
      semi: true,
      singleQuote: true,
    }
  );

  fs.writeFileSync(OUTPUT_PATH, code);

  console.timeEnd('generate');
};

run();
