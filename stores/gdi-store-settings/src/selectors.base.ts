import { createSelector } from 'reselect';
import { IActiveApp, ISettingsStore } from './types';
import { sortBy, distinctColors } from 'shared-base';

export const $i = (state: any) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $activeApps = createSelector($i, (state: Json): IActiveApp[] => {
    console.log('state ->', state);

    return Object.keys(state)
        .map((nodeKey) => {
            const nodeCount = Object.keys(state[nodeKey]).length;
            const totalSize = calcSize(state[nodeKey]);
            const description = '';

            return {
                id: nodeKey,
                title: nodeKey,
                nodeCount,
                totalSize,
                description,
            } as IActiveApp;
        })
        .sort(sortBy('title'))
        .map((activeApp: IActiveApp, index) => {
            const color = distinctColors[index];

            return {
                ...activeApp,
                color,
            };
        });
});

export const $activeAppsStats = createSelector(
    $activeApps,
    (activeApps: IActiveApp[]): IActiveAppsStats => {
        const count = activeApps.length;

        const totalNodeCount = activeApps.reduce((acc, app) => {
            return acc + app.nodeCount;
        }, 0);

        const totalSize = activeApps.reduce((acc, app) => {
            return acc + app.totalSize;
        }, 0);

        return {
            count,
            totalNodeCount,
            totalSize,
        };
    }
);

const calcSize = (json: Json) => {
    return JSON.stringify(json).length;
};
