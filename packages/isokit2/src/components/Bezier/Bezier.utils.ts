export function cubicBezierArrayToSvg(controlPoints: number[], width: number, height: number) {
  if (controlPoints.length !== 4) {
    throw new Error(
      'Invalid number of control points. Four control points are required for a cubic Bezier curve.'
    );
  }

  const [x1, y1, x2, y2] = controlPoints;

  const startX = 0;
  const startY = 0;
  const endX = width;
  const endY = height;

  const path = `M ${startX} ${startY} C ${x1 * width} ${y1 * height}, ${x2 * width} ${
    y2 * height
  }, ${endX} ${endY}`;
  return path;
}

export const handle1Position = (controlPoints: number[], width: number, height: number) => {
  const [x1, y1] = controlPoints;

  return {
    x: 40 + width * x1,
    y: 10 + height * (1 - y1),
  };
};

export const handle2Position = (controlPoints: number[], width: number, height: number) => {
  const [_x1, _y1, x2, y2] = controlPoints;

  return {
    x: 40 + width * x2,
    y: 10 + height * (1 - y2),
  };
};

export function handle1Path(controlPoints: number[], width: number, height: number) {
  const [x1, y1] = controlPoints;

  return `M 0 0 L ${width * x1 + 5} ${height * y1 - 5} Z`;
}

export function handle2Path(controlPoints: number[], width: number, height: number) {
  const [_x1, _y1, x2, y2] = controlPoints;
  return `M ${width} ${height} L ${width * x2 + 5} ${height * y2 - 5} Z`;
}
