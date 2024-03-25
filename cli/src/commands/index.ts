import { run as runComponent } from './component';
import { run as runInit } from './init';
import { run as runStart } from './start';
import { run as runPrompt } from './prompt';

export const allCommands = {
  component: runComponent,
  init: runInit,
  start: runStart,
  prompt: runPrompt,
};
