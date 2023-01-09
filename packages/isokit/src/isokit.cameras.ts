import { ArcRotateCamera, FreeCamera, Tools } from '@babylonjs/core';
import { delay, getJson, setJson, ts } from 'shared-base';
import { logTime, logTimeEnd, scene } from './isokit.globals';
import {
    vector3,
    createAnimation,
    simplifyRadians,
    vectorRadians,
} from './isokit.helpers';

type InitMethod = (camera: IStudioCamera) => void;

export const initCameraArc = (camera: IStudioCamera) => {
    const { identifier, values } = camera;
    const {
        alpha,
        beta,
        radius,
        target,
        lowerRadiusLimit,
        upperRadiusLimit,
        lowerBetaLimit,
        upperBetaLimit,
    } = values ?? {};

    const item = new ArcRotateCamera(
        identifier,
        alpha,
        beta,
        radius,
        vector3(target),
        scene
    );

    item.attachControl(true);
    item.lowerRadiusLimit = lowerRadiusLimit;
    item.upperRadiusLimit = upperRadiusLimit;
    item.lowerBetaLimit = Tools.ToRadians(lowerBetaLimit);
    item.upperBetaLimit = Tools.ToRadians(upperBetaLimit);
};

export const initCameraUniversal = (camera: IStudioCamera) => {
    const { identifier, position, rotation } = camera;

    const item = new FreeCamera(
        identifier,
        vector3(position ?? [0, 0, 0]),
        scene
    );

    item.rotation = vectorRadians(rotation ?? [0, 0, 0]);
    // item.attachControl(true);
};

const map: Record<string, InitMethod> = {
    universal: initCameraUniversal,
    arc: initCameraArc,
};

export const initCamera = (camera: IStudioCamera) => {
    const method = map[camera.type];

    if (method) {
        return method(camera);
    }
};

export const initCameras = async (cameras: IStudioCameras) => {
    logTime('initCameras');

    for (let camera of Object.values(cameras)) {
        const { identifier } = camera;

        logTime(`initCamera ${identifier}`);
        await initCamera(camera);
        logTimeEnd(`initCamera ${identifier}`);
    }

    logTimeEnd('initCameras');
};

export const cameraFlyIn = async (values: Json) => {
    const { radius, alpha, beta, target } = values;

    await delay(0);

    const camera = scene.activeCamera as ArcRotateCamera;

    const toRadius = camera.radius;
    const toAlpha = camera.alpha;
    const toBeta = camera.beta;
    const toTarget = camera.target;

    camera.radius = radius;
    camera.alpha = alpha;
    camera.beta = beta;
    camera.target = vector3(target);

    if (!camera) {
        return;
    }

    moveCamera(camera, {
        radius: toRadius,
        alpha: toAlpha,
        beta: toBeta,
        target: toTarget,
    });
};

export function animateCamera(params: Json) {
    const camera = scene.activeCamera as ArcRotateCamera;

    const { radius, alpha, beta, target } = camera;

    moveCamera(camera, {
        radius,
        alpha,
        beta,
        target,
        ...params,
    });
}

function moveCamera(camera: ArcRotateCamera, params: Json) {
    const { radius, alpha, beta, target } = params;

    camera.animations = [
        createAnimation({
            property: 'radius',
            from: camera.radius,
            to: radius,
        }),
        createAnimation({
            property: 'beta',
            from: simplifyRadians(camera.beta),
            to: beta,
        }),
        createAnimation({
            property: 'alpha',
            from: simplifyRadians(camera.alpha),
            to: alpha,
        }),
        createAnimation({
            property: 'target.x',
            from: camera.target.x,
            to: target.x,
        }),
        createAnimation({
            property: 'target.y',
            from: camera.target.y,
            to: target.y,
        }),
        createAnimation({
            property: 'target.z',
            from: camera.target.z,
            to: target.z,
        }),
    ];

    scene.beginAnimation(camera, 0, 100, false, 4);
}

type SnoozeParams = {
    minutes: number;
};

export const snoozeFlyIn = (params: SnoozeParams) => {
    const { minutes } = params;

    setJson('FLIGHT_IN_SNOOZE', {
        snoozeUntil: ts() + minutes * 60 * 1000,
    });
};

export const snoozeFlyInCheck = () => {
    const snooze = getJson('FLIGHT_IN_SNOOZE');

    if (snooze && snooze.snoozeUntil > ts()) {
        return true;
    }

    return false;
};
