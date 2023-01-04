import { Scene, AbstractMesh, Animation, Vector3 } from '@babylonjs/core';

let animationIndex = 0;

export const onScene = (scene: Scene) => {
    console.log('onScene');

    startPosition(scene);

    scaleByMeshName(scene, 'p1', randomLevel());
    scaleByMeshName(scene, 'p2', randomLevel());
    scaleByMeshName(scene, 'p3', randomLevel());
    scaleByMeshName(scene, 'p4', randomLevel());
    scaleByMeshName(scene, 'p5', randomLevel());
    scaleByMeshName(scene, 'p6', randomLevel());
    scaleByMeshName(scene, 'p7', randomLevel());
    scaleByMeshName(scene, 'p8', randomLevel());
};

let meshes = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];

const randomLevel = () => {
    return Math.floor(Math.random() * 7) + 3;
};

export const startPosition = (scene: Scene) => {
    meshes.forEach((meshName) => {
        const mesh = getMesh(scene, meshName);

        if (mesh) {
            mesh.scaling = new Vector3(0, 0, 0);
        }
    });
};

export const scaleByMeshName = (
    scene: Scene,
    meshName: string,
    level: number = 1,
    duration: number = 1
) => {
    const mesh = getMesh(scene, meshName);
    scale(mesh, level, duration);
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

export const scale = (
    mesh: AbstractMesh | undefined,
    levelRaw: number,
    duration: number
) => {
    if (!mesh) {
        return;
    }

    const level = Math.min(levelRaw, 6);

    console.log('level ->', level);

    const scaleValue = levelScaleMap[level] ?? 0;
    console.log('scaleValue ->', scaleValue);

    Animation.CreateAndStartAnimation(
        `animation-${animationIndex++}`,
        mesh,
        'scaling.x',
        30,
        duration * 30,
        1.0,
        scaleValue,
        Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    Animation.CreateAndStartAnimation(
        `animation-${animationIndex++}`,
        mesh,
        'scaling.y',
        30,
        duration * 30,
        1.0,
        scaleValue,
        Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    Animation.CreateAndStartAnimation(
        `animation-${animationIndex++}`,
        mesh,
        'scaling.z',
        30,
        duration * 30,
        1.0,
        scaleValue,
        Animation.ANIMATIONLOOPMODE_CONSTANT
    );
};

const getMesh = (scene: Scene, name: string) => {
    return scene.meshes.find((mesh) => {
        return mesh.name === name;
    });
};
