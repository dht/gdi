export const createCubicBezier = (easing: number[]) => {
  const [p1x, p1y, p2x, p2y] = easing;
  // Calculate the polynomial coefficients
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;

  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;

  // Define the cubic Bezier easing function
  return function (t: number) {
    // Ensure that t is within the valid range of 0 to 1
    t = Math.min(1, Math.max(0, t));

    // Calculate the easing value
    const x = ax * t * t * t + bx * t * t + cx * t;
    const y = ay * t * t * t + by * t * t + cy * t;

    return y; // You can also return `x` or an object {x, y} depending on your needs.
  };
};
