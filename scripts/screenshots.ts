import * as fs from 'fs';
import * as path from 'path';
import * as kleur from 'kleur';
import { globSync } from 'glob';
import { debounce } from 'lodash';
import * as chokidar from 'chokidar';
import * as sharp from 'sharp';
import type { OutputInfo } from 'sharp';
import { mapValues } from 'lodash';

const DEBOUNCE_DELAY = 1000;

const cwd = path.resolve(process.cwd(), '.');

const filenames = globSync(['boards/**/*.raw.png'], {
  cwd,
});

if (filenames.length === 0) {
  console.log(kleur.red(`no png file found in ${cwd}`));
  process.exit();
}

const resizeImage = (
  inputPath: string,
  toWidth: number,
  outputPath: string
): Promise<OutputInfo> => {
  return new Promise((resolve, reject) => {
    sharp(inputPath)
      .resize(toWidth)
      .webp()
      .toFile(outputPath, (err, info) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(info);
      });
  });
};

let ratios: Record<string, number> = {};

async function transform(filename: string) {
  const timestamp = ts();

  const inputFile = `${cwd}/${filename}`;
  const { dir, name } = path.parse(inputFile);
  const filenameOutput = name.replace('.raw', '') + '.webp';
  const filenameThumbOutput = name.replace('.raw', '.thumb') + '.webp';

  const outputDir = `${dir}`;
  const outputFile = `${outputDir}/${filenameOutput}`;

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(
    [kleur.green(`${timestamp} |`), 'writing new file to', kleur.yellow(filenameOutput)].join(' ')
  );
  await resizeImage(inputFile, 1000, outputFile);

  const outputThumbFile = `${outputDir}/${filenameThumbOutput}`;

  console.log(
    [kleur.green(`${timestamp} |`), 'writing new file to', kleur.yellow(outputThumbFile)].join(' ')
  );
  await resizeImage(inputFile, 700, outputThumbFile);

  const imageInfo = await sharp(inputFile).metadata();
  const { width, height } = imageInfo;
  const ratio = width / height;

  const boardIdRegex = /\/(C-[0-9]+)\//g;
  const boardId = boardIdRegex.exec(filename)[1];

  ratios[boardId] = ratio;
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

const promises = filenames.map((filename) => {
  return transform(filename);
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

const run = async () => {
  await Promise.all(promises);
  const siblingsRaw = fs.readFileSync(`${cwd}/boards/siblings.json`, 'utf-8');
  const siblings = JSON.parse(siblingsRaw);
  const siblingOut = mapValues(siblings, (sibling) => {
    const { boardId } = sibling;

    const ratio = ratios[boardId];

    return {
      ...sibling,
      imageThumbUrl: `http://localhost:3001/boards/${boardId}/screenshot.thumb.webp`,
      imageUrl: `http://localhost:3001/boards/${boardId}/screenshot.webp`,
      ratio,
    };
  });

  fs.writeFileSync(`${cwd}/boards/siblings.json`, JSON.stringify(siblingOut, null, 2));
};

run();
