import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
const cwd = path.resolve(process.cwd(), '.');

const getIgnores = () => {
  const ignores = [];

  glob
    .sync('**/.gitignore', {
      cwd,
      ignore: ['**/node_modules/**', '**/dist/**'],
    })
    .map((filename) => {
      const fileContent = fs.readFileSync(filename, 'utf8');
      const lines = fileContent
        .split('\n')
        .filter((line) => line.startsWith('#') || line.trim() !== '')
        .map((line) => {
          const parts = line.split('#');
          let glob = parts[0].trim();

          if (glob.endsWith('/')) {
            glob += '**';
          }

          return filename.replace('.gitignore', '') + glob;
        });

      ignores.push(...lines);
    });

  return ignores;
};

const run = async () => {
  console.time('glob');

  const total = {
    size: 0,
    count: 0,
    perDir: {},
  };

  const ignores = getIgnores();

  const files = glob
    .sync('**/*.*', {
      cwd,
      ignore: [
        '**/node_modules/**',
        '**/lib/**',
        '**/dist/**',
        'package-lock.json',
        'web/stats.html',
        ...ignores,
      ],
    })
    .map((filename) => {
      const fileSize = fs.statSync(filename).size;
      const dir = path.dirname(filename);

      total.size += fileSize;
      total.count++;

      total['perDir'][dir] = total['perDir'][dir] || 0;
      total['perDir'][dir] += fileSize;

      return { filename, fileSize, dir };
    })
    .sort((a, b) => b.fileSize - a.fileSize);

  fs.writeFileSync(
    cwd + '/scripts/output/files.json',
    JSON.stringify(
      {
        total,
        files,
      },
      null,
      2
    )
  );

  console.timeEnd('glob');
};

run();
