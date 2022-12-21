import { Color4, ParticleSystem, Texture, Vector3 } from '@babylonjs/core';
import { logTime, logTimeEnd, scene } from './isokit.globals';
import { vector3 } from './isokit.helpers';

export const initParticle = (item: IStudioParticle) => {
    const { identifier, url, size, speed, maxLife, emitRate, position } = item;

    logTime(`initParticle ${identifier}`);

    var particleSystem = new ParticleSystem(identifier, 200, scene);

    //Texture of each particle
    particleSystem.particleTexture = new Texture(url, scene);

    // lifetime
    particleSystem.minLifeTime = 2;
    particleSystem.maxLifeTime = maxLife;

    // emit rate
    particleSystem.emitRate = emitRate;

    // gravity
    particleSystem.gravity = new Vector3(0.25, 1.5, 0);

    // size gradient
    particleSystem.addSizeGradient(size * 0, size * 0.6, size * 1);
    particleSystem.addSizeGradient(size * 0.3, size * 1, size * 2);
    particleSystem.addSizeGradient(size * 0.5, size * 2, size * 3);
    particleSystem.addSizeGradient(size * 1.0, size * 6, size * 8);

    particleSystem.addColorGradient(
        1.0,
        new Color4(1 - 0.0, 1 - 0.0, 1 - 0.0, 1),
        new Color4(1 - 0.03, 1 - 0.03, 1 - 0.03, 1)
    );

    const size2 = speed || size;

    // speed gradient
    particleSystem.addVelocityGradient(size2 * 0, size2 * 1, size2 * 1.5);
    particleSystem.addVelocityGradient(size2 * 0.1, size2 * 0.8, size2 * 0.9);
    particleSystem.addVelocityGradient(size2 * 0.7, size2 * 0.4, size2 * 0.5);
    particleSystem.addVelocityGradient(size2 * 1, size2 * 0.1, size2 * 0.2);

    // rotation
    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI;
    particleSystem.minAngularSpeed = -1;
    particleSystem.maxAngularSpeed = 1;

    // blendmode
    particleSystem.blendMode = ParticleSystem.BLENDMODE_STANDARD;

    // emitter shape
    particleSystem.createSphereEmitter(0.1);

    // Where the particles come from
    particleSystem.emitter = vector3(position ?? [0, 0, 0]); // the starting object, the emitter
    particleSystem.minEmitBox = new Vector3(-0.5, -0.5, -0.5); // Starting all from
    particleSystem.maxEmitBox = new Vector3(0.5, 0.5, 0.5); // To...

    // Start the particle system
    particleSystem.start();

    logTimeEnd(`initParticle ${identifier}`);
};

export const initParticles = async (externals: IStudioParticles) => {
    logTime('initParticles');

    for (let particle of Object.values(externals)) {
        const { identifier } = particle;
        logTime(`initParticle ${identifier}`);
        await initParticle(particle);
        logTimeEnd(`initParticle ${identifier}`);
    }

    logTimeEnd('initParticles');
};
