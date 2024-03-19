import { parseCellChange } from '../../../helpers/sheet.parser';

export const parseChange = (change: Json) => {
  const output = parseCellChange(change);

  return output;
};

export const parseTemplate = (template: string, data: Json) => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return data[key] || match;
  });
};


export const cleanResponse = (text: string) => {
  return text.replace(/^"/, '')
    .replace(/"$/, '');
}
    