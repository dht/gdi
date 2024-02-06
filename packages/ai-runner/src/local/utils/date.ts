export const ts = () => Date.now();

export const isInDelta = (start: number, cap: number) => {
  if (!start) {
    return false;
  }

  const delta = ts() - start;

  return delta < cap;
};
