export const parameters = [
  {
    id: 'documentType',
    preText: 'I am writing a',
    placeholder: 'document type',
  },
  {
    id: 'documentLength',
    preText: 'It should be',
    placeholder: 'document length',
  },
  {
    id: 'documentStyle',
    preText: 'and written',
    placeholder: 'document style',
  },
];

export const initialState = {
  documentType: 'email',
  documentLength: '3 paragraphs',
  documentStyle: 'casually',
  topicAndInstructions: '',
};
