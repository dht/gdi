export const createOptions = (values: string[]) => {
  return values.map((value) => {
    return {
      id: value,
      text: value,
    };
  });
};
