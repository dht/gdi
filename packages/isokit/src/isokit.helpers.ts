import {
    Animation,
    Color3,
    Color4,
    CubicEase,
    EasingFunction,
    Tools,
    Vector3,
} from '@babylonjs/core';

export const color3 = (colorArr: number[]) => {
    return new Color3(colorArr[0], colorArr[1], colorArr[2]);
};

export const color4 = (colorArr: number[]) => {
    return new Color4(colorArr[0], colorArr[1], colorArr[2], colorArr[3]);
};

export const vector3 = (vectorArr: Json): any => {
    return new Vector3(vectorArr.x, vectorArr.y, vectorArr.z);
};

export const vectorRadians = (vectorArr: Json): any => {
    return new Vector3(
        Tools.ToRadians(vectorArr.x),
        Tools.ToRadians(vectorArr.y),
        Tools.ToRadians(vectorArr.z)
    );
};

export function createAnimation(params: Json) {
    const { property, from, to } = params;

    const ease = new CubicEase();
    ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);

    const animation = Animation.CreateAnimation(
        property,
        Animation.ANIMATIONTYPE_FLOAT,
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
        ? simplifiedRadians + Tools.ToRadians(360)
        : simplifiedRadians;
}
