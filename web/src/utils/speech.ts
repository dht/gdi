import { Json } from '../types';

const goodVoices = [
  'Google UK',
  'Google US',
  'Lee',
  'Serena',
  'Veena',
  'Carmit',
  'Ava',
  'Gordon',
  'Karen',
];

export const speak = (text: string, voiceName: string = 'Aaron') => {
  const synth = window.speechSynthesis;

  // Create a new SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.pitch = 1;
  utterance.rate = 1.5;
  utterance.volume = 1;

  const voices = speechSynthesis.getVoices();
  const voice = voices.find((i) => goodVoices.some((gv) => i.name.includes(gv)));

  if (voice) {
    utterance.voice = voice;
  }

  synth.speak(utterance);
};

export const speakLastAssistantLine = (transcriptLines: Json) => {
  const assistantLines = Object.values(transcriptLines ?? {}).filter(
    (t) => t.speakerName === 'assistant'
  );

  const lastAssistantLine = assistantLines.pop();

  if (!lastAssistantLine) {
    return;
  }

  speak(lastAssistantLine.text);
};

export const rnd = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const rndArr = (arr: string[]) => {
  const length = arr.length;
  const index = rnd(0, length - 1);
  return arr[index];
};
