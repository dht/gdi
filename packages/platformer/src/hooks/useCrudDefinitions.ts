import { useContext, useMemo } from 'react';
import { PlatformContext } from '../core/Platform.context';

export const useCrudDefinitions = (itemType: ItemType) => {
    const { crudDefinitions, pieMenuConfig } =
        useContext(PlatformContext).state;

    const definitions = crudDefinitions[itemType];
    const pieMenu = pieMenuConfig[itemType];

    const output = useMemo(
        () => ({
            ...definitions,
            pieMenu,
        }),
        [definitions, pieMenu]
    );

    if (!definitions) {
        throw new Error(`No crud definitions for item type ${itemType}`);
    }

    return output;
};
