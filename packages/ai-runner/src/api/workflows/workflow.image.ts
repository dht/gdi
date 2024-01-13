import { guid4 } from 'shared-base';
import { image } from '../../api/openai';
import { Json } from '../../types';
import { saveToBucket } from '../files';

export const basic = async (req: any, api: Json, params: Json) => {
  const { prompt } = params;

  const promptOriginal = prompt;
  let promptRevised = '';

  let isWorkflowSuccess = true,
    errorMessage: string = '',
    imageUrl,
    total = 0;

  const response = await image.image(prompt);
  const id = guid4();

  if (response.isSuccess) {
    const { data, cost } = response;

    try {
      const buffer = Buffer.from(data.b64Json, 'base64');
      promptRevised = data.revisedPrompt;
      imageUrl = await saveToBucket(req, `images/${id}.jpg`, buffer, 'image/jpg');
      total = cost.total;
      isWorkflowSuccess = true;
    } catch (err) {
      console.error('Error saving jpg to bucket:', err);
    }
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
