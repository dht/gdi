import { get } from 'lodash';
import { instance } from './_init';
import { mergeToolCalls, parseToolCalls } from '../../utils/stream';
import { capabilities } from '../../data/data.capabilities';

type Flavour = 'haiku' | 'opus' | 'sonnet';

const map: Record<Flavour, string> = {
  haiku: 'claude-3-haiku-20240229',
  opus: 'claude-3-opus-20240229',
  sonnet: 'claude-3-sonnet-20240229',
};

export const chat = async (prompt: string, flavour: Flavour = 'sonnet') => {
  const model = map[flavour];

  const res = await instance.messages.create({
    model,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 1024,
  });

  if (res.content.length > 0) {
    const generatedText = get(res, 'choices[0].message.content', '').trim();
    return { text: generatedText };
  } else {
    throw new Error('No choices available');
  }
};

export const stream = (
  messages: any[],
  tools: any[] = capabilities,
  callback: any,
  flavour: Flavour = 'sonnet'
) => {
  return new Promise(async (resolve) => {
    const tsStart = Date.now();

    const model = map[flavour];
    try {
      const res: any = await instance.messages.stream({
        model,
        messages,
        temperature: 0,
        max_tokens: 1024,
      });

      let allContent = '',
        finishReason = '',
        toolCalls: any = [];

      for await (const item of res.iterator()) {
        console.log('item ->', item);

        const content = get(item, 'choices[0].delta.content', '');
        const tool_calls = get(item, 'choices[0].delta.tool_calls', '');
        finishReason = get(item, 'choices[0].finish_reason');

        allContent += content;

        if (allContent) {
          callback(allContent);
        }

        mergeToolCalls(toolCalls, tool_calls);
      }

      const tsEnd = Date.now();
      const duration = (tsEnd - tsStart) / 1000;

      toolCalls = parseToolCalls(toolCalls);

      resolve({
        success: true,
        content: allContent,
        finishReason,
        duration,
        tsStart,
        tsEnd,
        toolCalls,
      });
    } catch (err: any) {
      console.error('An error occurred:', err);
      resolve({
        success: false,
        error: err.message,
      });
    }
  });
};

export const completion = async (prompt: string, flavour: Flavour = 'sonnet') => {
  const model = map[flavour];

  const res = await instance.completions.create({
    model,
    prompt,
    max_tokens_to_sample: 1024,
  });

  return res;
};
