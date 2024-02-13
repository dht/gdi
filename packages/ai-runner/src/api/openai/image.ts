import { get } from 'lodash';
import { openai } from './_init';
import { calculateImageCost } from './_utils';
import { AIResponseBuilder } from '../../utils/response';

export type ImageSize = '1024x1024' | '1792x1024' | '1024x1792';

type Options = {
  isLarge?: boolean;
  size?: ImageSize;
  isHd?: boolean;
};

export const image = async (prompt: string, options: Options = {}) => {
  const output = new AIResponseBuilder();
  const { isHd = false, size = '1024x1024' } = options;

  try {
    const res = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      size,
      response_format: 'b64_json',
      quality: isHd ? 'hd' : 'standard',
    });

    const revisedPrompt = get(res, 'data[0].revised_prompt', '');
    const b64Json = get(res, 'data[0].b64_json', '');

    if (b64Json) {
      const cost = calculateImageCost(isHd, size);

      output //
        .withData({
          revisedPrompt,
          b64Json,
        })
        .withCost(cost);
    }
  } catch (err: any) {
    output //
      .withError(err.message)
      .withStatusCode(err.statusCode);
  }

  return output.build();
};
