export const lz = (str: number, minimum = 2) => {
  return String(str).padStart(minimum, '0');
};
