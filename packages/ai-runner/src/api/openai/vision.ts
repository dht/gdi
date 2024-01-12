import { get } from 'lodash';
import { openai } from './_init';

export const vision = async (url: string) => {
  const res = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: "What's in this image?" },
          {
            type: 'image_url',
            image_url: {
              url: url,
            },
          },
        ],
      },
    ],
  });

  if (res.choices.length > 0) {
    const text = get(res, 'choices[0].message.content', '').trim();
    return { text };
  } else {
    throw new Error('No description available');
  }
};
