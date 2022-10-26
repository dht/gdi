export const positionSphere = (lat: number, lng: number, height: number) => {
    const R = 1 + height / 100;

    const x = R * cos(lat) * cos(lng);
    const y = R * sin(lat);
    const z = R * cos(lat) * sin(lng);

    return {
        x: round(x),
        y: round(y),
        z: round(z),
    };
};

const toRadians = (angle: number) => (angle * Math.PI) / 180;
const sin = (angle: number) => Math.sin(toRadians(angle));
const cos = (angle: number) => Math.cos(toRadians(angle));
const round = (value: number) => Math.round(1000 * value) / 1000;
