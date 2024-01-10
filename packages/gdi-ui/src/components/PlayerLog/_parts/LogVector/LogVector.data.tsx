export const parserVector = (value: any, item?: Json) => {
  if (!Array.isArray(value)) {
    return [value];
  }

  return value.map((i) => i.toFixed(2));
};

export const parserFixed = (value: any, item?: Json) => {
  if (typeof value !== 'number') {
    return value;
  }

  return value.toFixed(2);
};

export const parserArc = (_value: any, item?: Json) => {
  const { alpha = 0, beta = 0, radius = 0 } = item ?? {};

  return [alpha.toFixed(2), beta.toFixed(2), radius.toFixed(2)];
};

export const columns = {
  position: {
    id: 'position',
    title: 'pos',
    parser: parserVector,
  },
  rotation: {
    id: 'rotation',
    title: 'rot',
    parser: parserVector,
  },
  alpha: {
    id: 'alpha',
    title: 'arc',
    parser: parserArc,
  },
};
