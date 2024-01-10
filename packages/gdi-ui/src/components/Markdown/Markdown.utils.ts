export const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    try {
      parseJsObject(str);
      return true;
    } catch (e) {
      return false;
    }
  }
  return true;
};

export const parseJsObject = (str: string) => {
  return new Function(`return ${str}`)();
};
