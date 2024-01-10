export const point = (x?: number, y?: number) => {
  if (!x || !y) {
    return '';
  }

  return [y, x, y, x].join('/');
};

export const area = (
  sy: number | undefined,
  sx: number | undefined,
  ey: number | undefined,
  ex: number | undefined
) => {
  if (!sx || !sy || !ex || !ey) {
    return '';
  }

  return [sy, sx, ey, ex].join('/');
};

export const areaDimension = (
  sy: number | undefined,
  sx: number | undefined,
  dy: number | undefined,
  dx: number | undefined
) => {
  if (!sx || !sy || !dx || !dy) {
    return '';
  }

  return area(sy, sx, sy + dy, sx + dx);
};
