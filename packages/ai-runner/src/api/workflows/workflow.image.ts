import { guid4 } from 'shared-base';
import { image } from '../../api/openai';
import { Json } from '../../types';
import { saveToBucket } from '../files';

export const basic = async (req: any, api: Json, params: Json) => {
  const { prompt, promptParams } = params;

  const { imageSize = '1024x1024', imageQuality = 'standard' } = promptParams;

  const promptOriginal = prompt;
  let promptRevised = '';

  let isWorkflowSuccess = true,
    errorMessage: string = '',
    imageUrl,
    total = 0;

  const options = {
    isHd: imageQuality === 'hd',
    size: imageSize,
  };

  const response = await image.image(prompt, options);
  const id = guid4();

  if (response.isSuccess) {
    const { data, cost, duration, durationText } = response;

    try {
      const buffer = Buffer.from(data.b64Json, 'base64');
      promptRevised = data.revisedPrompt;

      const meta = {
        id,
        source: 'generated',
        prompt,
        promptParams,
        cost,
        workflowId: 'image',
        duration,
        durationText,
      };

      imageUrl = await saveToBucket(req, `images/${id}.jpg`, buffer, 'image/jpg', meta);
      total = cost.total;
      isWorkflowSuccess = true;
    } catch (err) {
      console.error('Error saving jpg to bucket:', err);
    }
  } else {
    errorMessage = response.meta.errorMessage ?? '';
  }

  const changeVariables = {
    imageUrl,
    promptRevised,
    promptOriginal,
  };

  const changeNodeState = {
    status: isWorkflowSuccess ? 'done' : 'error',
    errorMessage,
    cost: {
      total,
    },
  };

  return [changeVariables, changeNodeState];
};
