import * as fs from 'fs';
import { openai } from './_init';
import { FileCreateParams } from 'openai/resources';

export const create = async (params: Partial<FileCreateParams>) => {
  const file = await openai.files.create({
    ...(params as FileCreateParams),
    purpose: 'assistants',
  });

  return file;
};
