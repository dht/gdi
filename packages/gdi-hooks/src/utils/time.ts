export const ts = () => new Date().getTime();

const now = ts();

export const delta = () => ((ts() - now) / 1000).toFixed(2);
