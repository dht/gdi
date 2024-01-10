import { runPrompt } from './prompts';

const run = async () => {
  const prompt = 'What is your name?';
  const promptName = 'assistant-generator';

  const name = await runPrompt(prompt, promptName);
};

run();
