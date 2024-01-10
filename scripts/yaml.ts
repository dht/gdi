import * as fs from 'fs';
import * as path from 'path';
import * as kleur from 'kleur';
import * as yaml from 'js-yaml';
import { globSync } from 'glob';
import { debounce } from 'lodash';
import * as chokidar from 'chokidar';

const DEBOUNCE_DELAY = 1000;

const cwd = path.resolve(process.cwd(), '.');

const filenames = globSync(['web/src/**/*.yml', 'apps/*/src/**/*.yml', 'packages/*/src/**/*.yml'], {
  cwd,
});

if (filenames.length === 0) {
  console.log(kleur.red(`no yaml file found in ${cwd}`));
  process.exit();
}

function transform(filename: string) {
  const timestamp = ts();

  const inputFile = `${cwd}/${filename}`;
  const { dir, name } = path.parse(inputFile);
  const filenameOutput = name + '.json';

  const outputDir = `${dir}/json`;
  const outputFile = `${outputDir}/${filenameOutput}`;

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(
    [kleur.green(`${timestamp} |`), 'writing new file to', kleur.yellow(filenameOutput)].join(' ')
  );

  const contentYaml = fs.readFileSync(inputFile, 'utf8');
  const contentJson = yaml.load(contentYaml);
  fs.writeFileSync(outputFile, JSON.stringify(contentJson, null, 2));
}

const lz = (num: number) => (String(num).length < 2 ? '0' + num : String(num));

const ts = () => {
  let output: string[] = [];
  const now = new Date();
  output.push(lz(now.getHours()));
  output.push(lz(now.getMinutes()));
  output.push(lz(now.getSeconds()));
  return output.join(':');
};

filenames.forEach((filename) => {
  transform(filename);
});

const transformWithDebounce = debounce(transform, DEBOUNCE_DELAY);

const watcher = chokidar.watch(filenames, {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  cwd,
});

watcher.on('change', (filename) => {
  transformWithDebounce(filename);
});

console.log(kleur.magenta('watching:'));
filenames.forEach((filename) => {
  console.log(kleur.cyan('\t' + filename));
});
