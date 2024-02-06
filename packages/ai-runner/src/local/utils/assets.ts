import * as chokidar from 'chokidar';
import * as fs from 'fs-extra';
import { IFile } from '../types';
import { socketsAdapter } from './globals';
import { isInDelta, ts } from './date';

const DEBOUNCE_DELAY = 100;

const watchers = new Map<string, chokidar.FSWatcher>();

const debounce: Record<string, number> = {};

export const debounceWatch = (file: IFile) => {
  const { fullPath, info } = file;
  debounce[fullPath] = ts() + DEBOUNCE_DELAY;
};

export const addFileToWatch = (file: IFile) => {
  const { fullPath, info } = file;

  if (watchers.has(fullPath)) {
    return;
  }

  const watcher = chokidar.watch(fullPath, {
    ignoreInitial: true,
    persistent: true,
  });

  watcher.on('change', (path) => {
    const inDebounceDelta = isInDelta(debounce[fullPath], DEBOUNCE_DELAY);

    if (inDebounceDelta) {
      return;
    }

    const isJson = fullPath.endsWith('.json');
    let content;

    try {
      content = isJson ? fs.readJsonSync(fullPath) : {};
    } catch (err) {
      console.log('err =>', err);
    }

    socketsAdapter.sendMessageToAll('asset/change', {
      info,
      content,
    });
  });

  watchers.set(fullPath, watcher);
};

export const removeFileFromWatch = (file: IFile) => {
  const { fullPath } = file;

  const watcher = watchers.get(fullPath);

  if (watcher) {
    watcher.close();
    watchers.delete(fullPath);
  }
};

export const removeAll = () => {
  watchers.forEach((watcher) => {
    watcher.close();
  });

  watchers.clear();
};
