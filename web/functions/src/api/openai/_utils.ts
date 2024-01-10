import type { Cost } from '@gdi/store-base';
import { get } from 'lodash';
import { Json } from '../../types';
import { pricing } from './data/data.pricing';
import type { ImageSize } from './image';

export const parseModelId = (modelId: string) => {
  return modelId //
    .replace(/\-\d{4}$/g, '')
    .replace(/[-.]/g, '_');
};

/*
A helpful rule of thumb is that one token generally corresponds to ~4 characters of text for common English text. This translates to roughly ¾ of a word (so 100 tokens ~= 75 words).
source: https://platform.openai.com/tokenizer
*/

export const tokenizer = (text: string) => {
  const textClean = text.replace(/\.+/g, '.');
  const words = textClean.split(/[\s:\n.?]/g);
  const characters = textClean.length;

  const byCharacters = characters / 4;
  const byWords = (words.length * 4) / 3;
  const average = Math.floor((byCharacters + byWords) / 2);

  return average;
};

export const tokenizeContent = (content: Json[]) => {
  return content.reduce((acc, item) => {
    const text = get(item, 'text.value', '');
    const tokens = tokenizer(text);
    return acc + tokens;
  }, 0);
};

export const calculateAssistantCosts = (messages: Json[], modelId: string) => {
  const output: Cost = {
    inputCount: 0,
    outputCount: 0,
    inputRate: 0,
    outputRate: 0,
    total: 0,
  };

  const modelIdClean = parseModelId(modelId);

  const pricingForModel = Object.values(pricing).find((item) => {
    const { id, modelIds = [] } = item;
    return id === modelIdClean || modelIds.includes(modelIdClean);
  });

  if (!pricingForModel) {
    console.warn(`No pricing found for modelId: ${modelIdClean}`);
    return output;
  }

  output.inputRate = pricingForModel.input;
  output.outputRate = pricingForModel.output;

  messages.forEach((message) => {
    const { role, content = [] } = message;
    const isAssistant = role === 'assistant';
    const tokens = tokenizeContent(content);

    if (isAssistant) {
      output.outputCount = output.outputCount! + tokens;
    } else {
      output.inputCount = output.inputCount + tokens;
    }
  });

  let total =
    (output.inputCount / 1000) * output.inputRate +
    (output.outputCount! / 1000) * output.outputRate!;

  output.total = Math.round(total * 1000000) / 1000000;

  return output;
};

export const calculateSpeechCost = (prompt: string, modelId: string) => {
  const output: Cost = {
    inputCount: 0,
    outputCount: 0,
    inputRate: 0,
    outputRate: 0,
    total: 0,
  };

  const len = prompt.length;
  output.inputCount = len;

  const modelIdClean = parseModelId(modelId);

  const pricingForModel = Object.values(pricing).find((item) => {
    const { id, modelIds = [] } = item;
    return id === modelIdClean || modelIds.includes(modelIdClean);
  });

  if (!pricingForModel) {
    console.warn(`No pricing found for modelId: ${modelIdClean}`);
    return output;
  }

  output.inputRate = pricingForModel.pricePer1KCharacter;
  output.total = (output.inputCount / 1000) * output.inputRate;

  return output;
};

export const calculateImageCost = (isHd: boolean, size: ImageSize) => {
  const output: Cost = {
    inputCount: 0,
    outputCount: 0,
    inputRate: 0,
    outputRate: 0,
    total: 0,
  };

  const isLarge = ['1024x1024', '1792x1024', '1024x1792'].includes(size);

  const modelId = isHd ? 'dalle3_hd' : 'dalle3';
  const pricingForModel = pricing[modelId];

  output.outputCount = 1;
  output.outputRate = isLarge ? pricingForModel.imageLarge : pricingForModel.image;
  output.total = output.inputRate;

  return output;
};

export const parseJson = (json: string) => {
  try {
    return JSON.parse(json.replace('```json', '').replace('```', ''));
  } catch (e) {
    return json;
  }
};
