import * as BABYLON from 'babylonjs';

export const color3 = (colorArr: number[]) => {
    return new BABYLON.Color3(colorArr[0], colorArr[1], colorArr[2]);
};

export const color4 = (colorArr: number[]) => {
    return new BABYLON.Color4(
        colorArr[0],
        colorArr[1],
        colorArr[2],
        colorArr[3]
    );
};

export const vector3 = (vectorArr: Json): any => {
    return new BABYLON.Vector3(vectorArr.x, vectorArr.y, vectorArr.z);
};

export const vectorRadians = (vectorArr: Json): any => {
    return new BABYLON.Vector3(
        BABYLON.Tools.ToRadians(vectorArr.x),
        BABYLON.Tools.ToRadians(vectorArr.y),
        BABYLON.Tools.ToRadians(vectorArr.z)
    );
};

export function createAnimation(params: Json) {
    const { property, from, to } = params;

    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

    const animation = BABYLON.Animation.CreateAnimation(
        property,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        10,
        ease
    );
    animation.setKeys([
        {
            frame: 0,
            value: from,
        },
        {
            frame: 100,
            value: to,
        },
    ]);

    return animation;
}

export function simplifyRadians(radians: number) {
    const simplifiedRadians = radians % (2 * Math.PI);

    return simplifiedRadians < 0
        ? simplifiedRadians + BABYLON.Tools.ToRadians(360)
        : simplifiedRadians;
}
