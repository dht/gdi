import * as chokidar from 'chokidar';
import * as fs from 'fs-extra';
import { globSync } from 'glob';
import * as jsonDiff from 'json-diff';
import * as kleur from 'kleur';
import * as path from 'path';
import { Socket } from 'socket.io';
import { createExpress } from './express';
import * as keypress from 'keypress';
import { get } from 'lodash';

const cache = {};

const cwd = path.resolve(process.cwd(), './live');

const filenames = globSync(['*.json'], {
  cwd,
});

function refreshCache() {
  console.log('refreshing cache');
  filenames.forEach((filename) => {
    const content = fs.readJsonSync(`${cwd}/${filename}`);
    cache[filename] = content;
  });
}

const watcher = chokidar.watch(filenames, {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  cwd,
});

const { io, server } = createExpress();

io.on('connection', (socket: Socket) => {
  console.log('A user connected', socket.id);

  socket.on('disconnect', () => {
    console.log('A user disconnected', socket.id);
  });
});

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`WebSocket server is listening on port ${port}`);

  refreshCache();

  // Initialize keypress
  keypress(process.stdin);

  let isWatcherPaused = false;

  // Listen for keypress events
  process.stdin.on('keypress', (ch, key) => {
    if (key.name === 'c' && key.ctrl) {
      console.log('exiting');
      process.exit();
    }

    if (key && key.name === 'space') {
      if (isWatcherPaused) {
        isWatcherPaused = false;
        console.log('Watcher resumed');
        refreshCache();
      } else {
        isWatcherPaused = true;
        console.log('Watcher paused');
      }
    }
  });

  // Enable listening for keypress events
  process.stdin.setRawMode(true);
  process.stdin.resume();

  watcher.on('change', (filename, a) => {
    try {
      if (isWatcherPaused) {
        return;
      }

      const cacheContent = cache[filename];
      const content = fs.readJsonSync(`${cwd}/${filename}`);
      const diff = jsonDiff.diff(cacheContent, content);

      if (!diff) {
        return;
      }

      cache[filename] = content;

      const changeSize = JSON.stringify(diff).length;

      if (changeSize > 200) {
        console.log('change size too big, skipping');
        refreshCache();
        return;
      }

      io.emit('clip/live', expandArrays(diff, content));
    } catch (err) {
      console.log('err =>', err);
    }
  });

  console.log(kleur.magenta(`watching ${filenames.length} files`));
});

const expandArrays = (diff: any, content: any) => {
  for (let key of Object.keys(diff)) {
    const value = diff[key];

    if (Array.isArray(value)) {
      const originalValue = get(content, key, []);
      diff[key] = expandArray(originalValue, value);
    } else if (typeof value === 'object') {
      diff[key] = expandArrays(value, content[key]);
    } else {
      diff[key] = value;
    }
  }

  return diff;
};

const expandArray = (arr: any[], diff: any[]) => {
  const output = [];
  let index = 0;

  for (let key of diff) {
    if (key[0] === ' ') {
      output.push(arr[index]);
    } else {
      if (key[0] === '+') {
        output.push(key[1]);
      }
    }

    if (key[0] !== '-') {
      index++;
    }
  }

  return output;
};
