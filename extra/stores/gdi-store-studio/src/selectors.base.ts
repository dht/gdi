import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { pickBy } from 'shared-base';
import { IBoardConfig } from './types';

export const $board = createSelector(
    raw.$rawStudioIds,
    raw.$rawBoards,
    (currentIds, boards) => {
        const { boardId } = currentIds;

        return boards[boardId];
    }
);

export const $cameras = createSelector(
    raw.$rawStudioIds,
    raw.$rawCameras,
    (currentIds, cameras) => {
        const { boardId } = currentIds;

        return pickBy(cameras, (camera) => {
            return camera.boardId === boardId;
        });
    }
);

export const $grounds = createSelector(
    raw.$rawStudioIds,
    raw.$rawGrounds,
    (currentIds, grounds) => {
        const { boardId } = currentIds;

        return pickBy(grounds, (ground) => {
            return ground.boardId === boardId;
        });
    }
);

export const $externals = createSelector(
    raw.$rawStudioIds,
    raw.$rawExternals,
    (currentIds, externals) => {
        const { boardId } = currentIds;

        return pickBy(externals, (external) => {
            return external.boardId === boardId;
        });
    }
);

export const $lights = createSelector(
    raw.$rawStudioIds,
    raw.$rawLights,
    (currentIds, lights) => {
        const { boardId } = currentIds;

        return pickBy(lights, (light) => {
            return light.boardId === boardId;
        });
    }
);

export const $packs = createSelector(
    raw.$rawStudioIds,
    raw.$rawPacks,
    (currentIds, packs) => {
        const { boardId } = currentIds;

        return pickBy(packs, (pack) => {
            return pack.boardId === boardId;
        });
    }
);

export const $particles = createSelector(
    raw.$rawStudioIds,
    raw.$rawParticles,
    (currentIds, particles) => {
        const { boardId } = currentIds;

        return pickBy(particles, (particle) => {
            return particle.boardId === boardId;
        });
    }
);

export const $sounds = createSelector(
    raw.$rawStudioIds,
    raw.$rawSounds,
    (currentIds, sounds) => {
        const { boardId } = currentIds;

        return pickBy(sounds, (sound) => {
            return sound.boardId === boardId;
        });
    }
);

export const $sprites = createSelector(
    raw.$rawStudioIds,
    raw.$rawSprites,
    (currentIds, sprites) => {
        const { boardId } = currentIds;

        return pickBy(sprites, (sprite) => {
            return sprite.boardId === boardId;
        });
    }
);

export const $microAnimations = createSelector(
    raw.$rawStudioIds,
    raw.$rawMicroAnimations,
    (currentIds, microAnimations) => {
        const { boardId } = currentIds;

        return pickBy(microAnimations, (microAnimation) => {
            return microAnimation.boardId === boardId;
        });
    }
);

export const $videos = createSelector(
    raw.$rawStudioIds,
    raw.$rawVideos,
    (currentIds, videos) => {
        const { boardId } = currentIds;

        return pickBy(videos, (video) => {
            return video.boardId === boardId;
        });
    }
);

export const $boardConfig = createSelector(
    $board,
    $cameras,
    $grounds,
    $externals,
    $lights,
    $packs,
    $particles,
    $sounds,
    $sprites,
    $microAnimations,
    $videos,
    (
        board,
        cameras,
        grounds,
        externals,
        lights,
        packs,
        particles,
        sounds,
        sprites,
        microAnimations,
        videos
    ): IBoardConfig | null => {
        if (!board) {
            return null;
        }

        const config: IBoardConfig = {
            ...board,
            cameras,
            grounds,
            externals,
            lights,
            packs,
            particles,
            sounds,
            sprites,
            microAnimations,
            videos,
        };

        return config;
    }
);
