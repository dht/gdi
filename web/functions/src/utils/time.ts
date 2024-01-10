export const ts = () => Date.now();
export const tsShort = () => Date.now() / 1000;

export let start = ts();

export const resetDelta = () => {
  start = ts();
};

export const logDeltaInSeconds = (message: string) => {
  const now = ts();

  const delta = now - start;

  console.log(message, delta / 1000);
};
