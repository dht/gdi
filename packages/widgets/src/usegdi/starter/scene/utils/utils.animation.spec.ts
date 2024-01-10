import { dotsToAnimation } from './utils.animation';
import { dots } from './utils.animation.fixtures';

describe('animation', () => {
  it('dotsToAnimation', () => {
    expect(dotsToAnimation(dots, 'bit-02', 3)).toEqual([
      {
        id: 'arc',
        from: {
          alpha: 45,
          beta: 60,
          radius: 20,
        },
        to: {
          alpha: 15,
          beta: 60,
          radius: 30,
        },
        easing: [0.3, 0.2, 0.7, 0.8],
        duration: 3,
      },
      {
        id: 'glb-66e7',
        from: {
          position: [0, 0, 0],
          rotation: [0, 0, 0],
          scaling: [1, 1, 1],
        },
        to: {
          position: [0, 10, 0],
          rotation: [0, 180, 0],
          scaling: [2, 2, 2],
        },
        easing: [0.3, 0.2, 0.7, 0.8],
        duration: 3,
      },
    ]);
  });
});
