import { run as runComponent } from './component';
import { run as runInit } from './init';
import { run as runStart } from './start';

export const allCommands = {
  component: runComponent,
  init: runInit,
  start: runStart,
};
