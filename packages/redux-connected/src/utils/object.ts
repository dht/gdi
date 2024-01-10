export const arrayToObject = (array: any[], key: string = 'id') => {
  if (!array || !Array.isArray(array)) {
    return {};
  }

  return array.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
};
