import { mapValues } from 'lodash';

const assistants: any = {
  talk_with: {
    id: 'as-talk-with-${name}',
    name: 'Famous Person Emulator',
    description: 'An assistant that emulates ${name}, his world view, way of talking, and style.',
    instructions:
      "You are an assistant that emulates ${name}. Answer questions and engage in conversations in a way that aligns with ${name}'s world view, way of talking, and style.",
    model: 'gpt-3.5-turbo-1106',
    tools: [],
  },
  ask_about: {
    id: 'as-ask-about-${name}',
    name: 'Famous Person info',
    description:
      'An assistant that answers questions about ${name}, his world view, way of talking, and life.',
    instructions:
      "You are an assistant that answers questions about ${name}. Answer questions and engage in conversations about ${name}'s life, world view, way of talking, history, life and style.",
    model: 'gpt-3.5-turbo-1106',
    tools: [],
  },
};

export const parseAssistant = (name: string, tabId: string = 'talk_with') => {
  const template = assistants[tabId];
  const nameWithoutDots = name.replace(/\./g, '-');

  if (!template) return;

  return mapValues(template, (value: string) => {
    const isString = typeof value === 'string';

    return isString ? value.replace(/\${name}/g, nameWithoutDots) : value;
  });
};
