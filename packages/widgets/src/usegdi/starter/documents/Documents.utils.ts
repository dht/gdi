import { kebabCase, snakeCase } from 'lodash';
import { parseCellChange } from '../../../helpers/sheet.parser';

export const parseChange = (change: Json) => {
  const output = parseCellChange(change);

  return output;
};

export const parseDocumentTitle = (title: string) => {
  return kebabCase(title.trim()) + '.txt';
};
