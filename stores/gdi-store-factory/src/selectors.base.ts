import * as raw from './selectors.raw';
import { createSelector } from 'reselect';
import { ICustomBlockWithLayout, ILayouts } from './types';

export const $layouts = createSelector(
    raw.$rawCurrentIds,
    raw.$rawLayouts,
    (currentIds, layouts) => {
        const { resolutionId } = currentIds;

        return Object.values(layouts).reduce((output, layout) => {
            const { id } = layout;
            const items = (layout.items || []).filter(
                (i) => i.resolution === resolutionId
            );

            output[id] = {
                ...layout,
                items,
            };

            return output;
        }, {} as ILayouts);
    }
);

export const $layout = createSelector(
    raw.$rawCurrentIds,
    raw.$rawLayouts,
    (currentIds, layouts) => {
        const { layoutId } = currentIds;
        return layouts[layoutId];
    }
);

export const $customBlock = createSelector(
    raw.$rawCurrentIds,
    raw.$rawCustomBlocks,
    $layouts,
    (currentIds, blocks, layouts) => {
        const { customBlockId } = currentIds;
        const block = Object.values(blocks).find((b) => b.id === customBlockId);

        if (!block) {
            return;
        }

        const { layoutId } = block;

        const layout = Object.values(layouts).find((l) => l.id === layoutId);

        return {
            ...block,
            layout,
        } as ICustomBlockWithLayout;
    }
);

export const $inspector = createSelector(
    raw.$rawCurrentIds,
    raw.$rawCustomBlocks,
    raw.$rawLayouts,
    (currentIds, blocks, layouts) => {
        return {
            a: 5,
        };
    }
);
