import { get } from 'lodash';
import { openai } from './_init';

type Flavour = 'turbo4' | 'turbo3';

const map: Record<Flavour, string> = {
  turbo4: 'gpt-3.5-turbo-1106 ',
  turbo3: 'gpt-3.5-turbo',
};

export const chat = async (prompt: string, flavour: Flavour = 'turbo3') => {
  const model = map[flavour];

  const res = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    n: 1,
    stop: '{}',
  });

  if (res.choices.length > 0) {
    const generatedText = get(res, 'choices[0].message.content', '').trim();
    return { text: generatedText };
  } else {
    throw new Error('No choices available');
  }
};

export const completion = async (prompt: string, flavour: Flavour = 'turbo3') => {
  const model = map[flavour];

  const res = await openai.completions.create({
    model,
    prompt,
    n: 1,
    stop: '{}',
  });

  return res;
};
