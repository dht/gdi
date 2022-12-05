import * as BABYLON from 'babylonjs';
import { logTime, logTimeEnd, scene } from './isokit.globals';

export const initGlow = () => {
    const gl = new BABYLON.GlowLayer('glow', scene);
    gl.customEmissiveColorSelector = function (
        mesh,
        _subMesh,
        _material,
        result
    ) {
        const { name } = mesh;

        if (!name.includes('-glow-')) {
            result.set(0, 0, 0, 0);
            return;
        }

        const parts = name.split('-glow-');
        const glowColor = parts[1].split('_').shift() ?? '';

        const color = BABYLON.Color3.FromHexString(glowColor);
        result.set(color.r, color.g, color.b, 1);
    };
};
