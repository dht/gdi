const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const ROOT = path.resolve('./src/usegdi/starter');

const run = async () => {
  const output = {
    imports: [],
    exports: ['export const starter: IWidgets = {'],
  };

  fs.readdirSync(ROOT)
    .filter((file) => !['index.tsx', 'output.tsx'].includes(file))
    .forEach((file) => {
      const indexFile = `${file}/index.tsx`;
      let content = fs.readFileSync(`${ROOT}/${indexFile}`, 'utf8');

      const camelCase = _.camelCase(file);

      const names = {
        id: file,
        camelCase,
        component: _.upperFirst(camelCase),
        container: _.upperFirst(camelCase) + '.container',
      };

      const containerExists = fs.existsSync(`${ROOT}/${file}/${names.container}.tsx`);

      content = content
        .replace(/Speech/g, `${names.component}`)
        .replace('starter.speech', `starter.${names.id}`);

      if (!containerExists) {
        content = content.replace(/.container/g, '');
      }

      // write fixed component index.tsx
      fs.writeFileSync(`${ROOT}/${indexFile}`, content, 'utf8');

      output.imports.push(`import ${names.camelCase} from './${names.id}';`);
      output.exports.push(`'com.usegdi.starter.${names.id}': ${names.camelCase},`);
    });

  // write main index.tsx
  fs.writeFileSync(
    `${ROOT}/output.tsx`,
    [...output.imports, '', ...output.exports, '};'].join('\n'),
    'utf8'
  );
};

run();
