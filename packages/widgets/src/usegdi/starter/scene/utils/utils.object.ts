export const cleanUndefined = (obj: Json) => {
  const output: Json = {};

  for (let key of Object.keys(obj)) {
    const value = obj[key as keyof typeof obj];

    if (typeof value === 'object' && Array.isArray(value) === false) {
      output[key] = cleanUndefined(value);
    } else if (value !== undefined) {
      output[key] = value;
    }
  }

  return output;
};
