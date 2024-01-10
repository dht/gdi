export const parseJson = (raw: string, defaultValue: Json = {}): Json => {
  try {
    return JSON.parse(raw);
  } catch (err) {
    return defaultValue;
  }
};
