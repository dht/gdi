import { AIResponseBuilder } from '../../utils/response';
import { speech as speechElevenLabs } from '../elevenLabs/speech';
import { speech as speechOpenAi } from '../openai/speech';

const all: any = {
  ElevenLabs: speechElevenLabs,
  OpenAI: speechOpenAi,
};

type Options = {
  provider: string;
  voice: string;
};

export const speech = (prompt: string, options: Options) => {
  const { voice, provider } = options;

  const method = all[provider];

  if (!method) {
    const output = new AIResponseBuilder();
    output.withError('Invalid provider', 'invalid_provider');
    return output.build();
  }

  return method(prompt, options);
};
