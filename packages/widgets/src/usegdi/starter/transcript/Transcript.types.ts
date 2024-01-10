export type ISentence = {
  id: string;
  speakerName: string;
  text: string;
  audioUrl?: string;
  textPhonetics?: string;
  timestamp?: number;
};

export type ISpeaker = {
  id: number;
  name: string;
};
