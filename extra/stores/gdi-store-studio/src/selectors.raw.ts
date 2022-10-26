import { createSelector } from 'reselect';
import { IStudioStore } from './types';

export const $i = (state: { studio: IStudioStore }) => state.studio;
const $n = (): null => null;
const $o = (): void => {};

export const $rawStudioState = createSelector($i, (state: IStudioStore) => state.appStateStudio); // prettier-ignore
export const $rawSpaces = createSelector($i, (state: IStudioStore) => state.spaces); // prettier-ignore
export const $rawAssetsCustom = createSelector($i, (state: IStudioStore) => state.assetsCustom); // prettier-ignore
export const $rawAssets = createSelector($i, (state: IStudioStore) => state.assets); // prettier-ignore
export const $rawAssetCategories = createSelector($i, (state: IStudioStore) => state.assetCategories); // prettier-ignore
export const $rawBuildings = createSelector($i, (state: IStudioStore) => state.buildings); // prettier-ignore
export const $rawBoards = createSelector($i, (state: IStudioStore) => state.boards); // prettier-ignore
export const $rawInstances = createSelector($i, (state: IStudioStore) => state.instances); // prettier-ignore
export const $rawBrushes = createSelector($i, (state: IStudioStore) => state.brushes); // prettier-ignore
export const $rawCameras = createSelector($i, (state: IStudioStore) => state.cameras); // prettier-ignore
export const $rawGrounds = createSelector($i, (state: IStudioStore) => state.grounds); // prettier-ignore
export const $rawStudioItems = createSelector($i, (state: IStudioStore) => state.studioItems); // prettier-ignore
export const $rawLights = createSelector($i, (state: IStudioStore) => state.lights); // prettier-ignore
export const $rawParticles = createSelector($i, (state: IStudioStore) => state.particles); // prettier-ignore

export const $isomerData = createSelector(
    $rawInstances,
    $rawAssetsCustom,
    $rawAssetCategories,
    $rawBrushes,
    $rawSpaces,
    (instances, assets, assetCategories, brushes, spaces) => {
        return {
            instances,
            assets,
            assetCategories,
            brushes,
            spaces,
        };
    }
);

export const $babylonData = createSelector(
    $rawAssets,
    $rawCameras,
    $rawLights,
    $rawGrounds,
    $rawStudioItems,
    $rawBoards,
    (assets, cameras, lights, grounds, items, boards) => {
        return {
            assets,
            cameras,
            lights,
            grounds,
            items,
            boards,
        };
    }
);
