import { ListColumn } from './ElementList.types';

export const parseData = (item: Json, column: ListColumn) => {
  const { id, mapFields } = column;
  const output: Json = {};

  if (!mapFields) {
    output.value = item[id];
  } else {
    Object.keys(mapFields).forEach((key) => {
      const mapField = mapFields[key];
      output[key] = item[mapField];
    });
  }

  return output;
};
