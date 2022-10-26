import { positionSphere } from './positionSphere';

// -90   +90
// -180  +180
// 0     +100

describe('positionSphere', () => {
    it('longitude', () => {
        expect(positionSphere(0, 0, 0)).toEqual({ x: 1, y: 0, z: 0 });
        expect(positionSphere(0, 90, 0)).toEqual({ x: 0, y: 0, z: 1 });
        expect(positionSphere(0, 180, 0)).toEqual({ x: -1, y: 0, z: 0 });
        expect(positionSphere(0, 270, 0)).toEqual({ x: -0, y: 0, z: -1 });
    });

    it('latitude', () => {
        expect(positionSphere(0, 0, 0)).toEqual({ x: 1, y: 0, z: 0 });
        expect(positionSphere(45, 0, 0)).toEqual({ x: 0.707, y: 0.707, z: 0 });
        expect(positionSphere(90, 0, 0)).toEqual({ x: 0, y: 1, z: 0 });
        expect(positionSphere(-45, 0, 0)).toEqual({
            x: 0.707,
            y: -0.707,
            z: 0,
        });
        expect(positionSphere(-90, 0, 0)).toEqual({ x: 0, y: -1, z: 0 });
    });

    it('height', () => {
        expect(positionSphere(45, 45, 10)).toEqual({
            x: 0.55,
            y: 0.778,
            z: 0.55,
        });
    });
});
