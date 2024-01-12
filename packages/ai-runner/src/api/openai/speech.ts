import { AIResponseBuilder } from '../../utils/response';
import { openai } from './_init';
import { calculateSpeechCost } from './_utils';

type Model = 'tts-1' | 'tts-1-hd' | 'tts-1-hd-1106' | 'tts-1-1106';
type Voice = 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';

type Options = {
  model: Model;
  voice: Voice;
};

const voiceMap: Record<string, Voice> = {
  Sam: 'echo',
  Rachel: 'nova',
  Arnold: 'fable',
};

export const speech = async (prompt: string, options: Partial<Options>) => {
  let { voice = 'alloy', model = 'tts-1' } = options;

  voice = voiceMap[voice] ?? voice;

  const output = new AIResponseBuilder();

  try {
    const mp3 = await openai.audio.speech.create({
      model,
      voice,
      input: prompt,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());

    output.withData(buffer);
  } catch (err: any) {
    output.withError(err.message, err.type);
  }

  const cost = calculateSpeechCost(prompt, model);

  return output.withCost(cost).build();
};
