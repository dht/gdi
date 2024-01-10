import * as fs from 'fs-extra';
import * as path from 'path';
import * as kleur from 'kleur';
import * as yaml from 'js-yaml';
import { globSync } from 'glob';
import { debounce } from 'lodash';
import * as chokidar from 'chokidar';

const DEBOUNCE_DELAY = 100;

const sourceDir = path.resolve(process.cwd(), 'web/public/boards');

if (!fs.existsSync(sourceDir)) {
  console.log(kleur.red(`source directory not found: ${sourceDir}`));
  process.exit();
}
const destDir = path.resolve(process.cwd(), '../gdi-assets/boards');

if (!fs.existsSync(destDir)) {
  console.log(kleur.red(`destination directory not found: ${destDir}`));
  process.exit();
}

const filenames = globSync(['**/*.json'], {
  cwd: sourceDir,
});

if (filenames.length === 0) {
  console.log(kleur.red(`no json file found in source directory: ${sourceDir}/**/*.json`));
  process.exit();
}

function updateAllBoardsInSource(boardId: string, filename: string) {
  const board = fs.readJsonSync(`${sourceDir}/${filename}`);
  const allBoards = fs.readJsonSync(`${sourceDir}/allboards.json`);

  const index = allBoards.findIndex((board: any) => board.id === boardId);

  delete board.elements;
  allBoards[index] = board;

  fs.writeJsonSync(`${sourceDir}/allboards.json`, allBoards, { spaces: 2 });
}

function copyAllBoardsToDest() {
  const inputFile = `${sourceDir}/allboards.json`;
  const outputFile = `${destDir}/allboards.json`;

  fs.copyFileSync(inputFile, outputFile);
}

function getBoardId(filepath: string) {
  const regex = /B-[0-9]{3}\/(B-[0-9]{3})\.json/;
  const match = regex.exec(filepath);
  return match ? match[1] : null;
}

function copy(filename: string) {
  const inputFile = `${sourceDir}/${filename}`;
  const outputFile = `${destDir}/${filename}`;

  fs.copyFileSync(inputFile, outputFile);

  const boardId = getBoardId(filename);

  if (boardId) {
    console.log(kleur.green(`copied ${filename} & updated allboards.json`));
    updateAllBoardsInSource(boardId, filename);
    copyAllBoardsToDest();
  }
}

const copyDebounced = debounce(copy, DEBOUNCE_DELAY);

const watcher = chokidar.watch(filenames, {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  cwd: sourceDir,
});

watcher.on('change', (filename) => {
  copyDebounced(filename);
});

console.log(kleur.magenta(`watching ${filenames.length} files`));
