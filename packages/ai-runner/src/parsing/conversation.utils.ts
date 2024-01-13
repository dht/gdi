import { Json } from '../types';

export const conversationSplitTranscript = (text: string) => {
  const parts = text.split(/\n+/g);

  return parts.reduce((acc, part, index) => {
    const regex = /([a-z+]+):/gi;

    const match = regex.exec(part);

    const speakerName = match ? match[1] : '';

    const text = part.replace(regex, '').trim();

    const id = String(index + 1);

    acc[id] = {
      id,
      index,
      speakerName,
      text,
    };

    return acc;
  }, {} as Json);
};

export const conversationAddPhonetics = (messages: Json, variables: Json) => {
  const { transcriptPhonetics } = variables;

  const messagesPhonetics = conversationSplitTranscript(transcriptPhonetics);

  return Object.values(messages).reduce((acc, message) => {
    const id = message.id;
    const textPhonetics = messagesPhonetics[id].text;

    acc[id] = {
      ...message,
      textPhonetics,
    };

    return acc;
  }, {} as Json);
};
