import { openai } from './_init';

export const list = async () => {
  const res = await openai.models.list();

  return res.data;
};
