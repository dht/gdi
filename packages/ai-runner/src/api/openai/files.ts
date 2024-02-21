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

export const get = async (id: string) => {
  const file = await openai.files.content(id);

  return file as any;
};

export const remove = async (id: string) => {
  await openai.files.del(id);
};
