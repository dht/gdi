import { Scene, AbstractMesh, Animation, Vector3 } from '@babylonjs/core';
import { scene } from './isokit.globals';
import { loadBoard } from './isokit.load.board';

let animationIndex = 0;

let meshes = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];

let chartState = [0, 0, 0, 0, 0, 0, 0, 0];

export const drawPieChart = (glbUrl: string) => {
    console.log('onScene');

    loadBoard(pieBoard(glbUrl)).then(() => reset());

    return {
        updateData: (data: number[]) => {
            data.forEach((value, index) => {
                scale(index, value, 0.5, index * 0.2);
            });
        },
        updateDataByIndex: (index: number, value: number) => {
            scale(index, value, 0.5, 0);
        },
        reset,
    };
};

export const reset = () => {
    chartState = [0, 0, 0, 0, 0, 0, 0, 0];

    meshes.forEach((meshName) => {
        const mesh = getMesh(meshName);

        if (mesh) {
            mesh.scaling = new Vector3(0, 0, 0);
        }
    });
};

const levelScaleMap: Record<number, number> = {
    0: 0,
    1: 0.165,
    2: 0.34,
    3: 0.5,
    4: 0.67,
    5: 0.84,
    6: 1,
};

export const scale = async (
    index: number,
    levelRaw: number,
    duration: number = 1,
    delayDuration: number = 0
) => {
    const mesh = getMesh(`p${index + 1}`);

    if (!mesh) {
        return;
    }

    await delay(delayDuration * 1000);

    const level = Math.min(levelRaw, 6);

    const scaleValue = levelScaleMap[level] ?? 0;
    const fromValue = chartState[index];

    Animation.CreateAndStartAnimation(
        `animation-${animationIndex++}`,
        mesh,
        'scaling.x',
        30,
        duration * 30,
        fromValue,
        scaleValue,
        Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    Animation.CreateAndStartAnimation(
        `animation-${animationIndex++}`,
        mesh,
        'scaling.y',
        30,
        duration * 30,
        fromValue,
        scaleValue,
        Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    Animation.CreateAndStartAnimation(
        `animation-${animationIndex++}`,
        mesh,
        'scaling.z',
        30,
        duration * 30,
        fromValue,
        scaleValue,
        Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    chartState[index] = scaleValue;
};

const getMesh = (name: string) => {
    return scene.meshes.find((mesh) => {
        return mesh.name === name;
    });
};

export const pieBoard = (glbUrl: string): IBoardConfig => ({
    id: 'w-1',
    identifier: 'wheel-1',
    name: 'Wheel',
    backgroundType: 'transparent',
    flyIn: {
        radius: 33,
        alpha: 0.5,
        beta: 1,
        target: [0, 0, 0],
    },
    externals: {
        x1: {
            id: 'x1',
            boardId: 'ville',
            identifier: 'external-1',
            url: glbUrl,
        },
    },
    cameras: {
        c1: {
            id: 'c1',
            boardId: 'ville',
            identifier: 'arc-camera-1',
            type: 'arc',
            values: {
                radius: 12,
                alpha: 0.2,
                beta: 1,
                target: [0, 0, 0],
                lowerRadiusLimit: 0,
                upperRadiusLimit: 90,
                lowerBetaLimit: 0,
                upperBetaLimit: 90,
            },
        },
    },
    lights: {},
    microAnimations: {},
    grounds: {},
    packs: {},
    particles: {},
    sounds: {},
    sprites: {},
    videos: {},
    backgroundValues: {},
});

export const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
