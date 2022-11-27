import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import pickBy from 'lodash/pickBy';
import mapValues from 'lodash/mapValues';

export const $mode = createSelector(raw.$rawStudioState, (studioState) => {
    return studioState.mode;
});

export const $currentItems = createSelector(
    raw.$rawStudioState,
    raw.$rawStudioItems,
    (studioState, items) => {
        return pickBy(items, (item) => {
            return item.boardId === studioState.currentBoardId;
        });
    }
);

export const $cameras = createSelector(
    raw.$rawStudioState,
    raw.$rawCameras,
    (studioState, cameras) => {
        return pickBy(cameras, (camera) => {
            return camera.boardId === studioState.currentBoardId;
        });
    }
);

export const $grounds = createSelector(
    raw.$rawStudioState,
    raw.$rawGrounds,
    (studioState, grounds) => {
        return pickBy(grounds, (ground) => {
            return ground.boardId === studioState.currentBoardId;
        });
    }
);

export const $lights = createSelector(
    raw.$rawStudioState,
    raw.$rawLights,
    (studioState, lights) => {
        return pickBy(lights, (light) => {
            return light.boardId === studioState.currentBoardId;
        });
    }
);

export const $relevantBoards = createSelector(raw.$rawBoards, (boards) => {
    return pickBy(boards, (board) => {
        return ['work', 'life', 'balance'].includes(board.identifier);
    });
});

export const $buildings = createSelector(
    raw.$rawBuildings,
    raw.$rawAssets,
    (buildings, assets) => {
        return mapValues(buildings, (building) => {
            const asset = assets[building.assetId];

            return {
                ...building,
                asset,
            };
        });
    }
);
