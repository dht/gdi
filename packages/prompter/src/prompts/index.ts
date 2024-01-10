import { RunMethod } from '../prompter.types';
import { run as runAssistantGenerator } from './prompt.assistant-generator';
import * as fs from 'fs';

const allPrompts: any = {
  'assistant-generator': runAssistantGenerator,
};

export class PromptRunner {
  private runMethod: RunMethod;

  constructor(promptName: string) {
    if (!allPrompts[promptName]) {
      throw new Error(`Prompt ${promptName} not found`);
    }

    this.runMethod = allPrompts[promptName];
  }

  run(prompt: string) {
    return this.runMethod(prompt);
  }
}

export const runPrompt = async (prompt: string, promptName: string) => {
  const promptRunner = new PromptRunner(promptName);
  return promptRunner.run(prompt);
};
