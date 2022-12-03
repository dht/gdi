import { useContext, useMemo } from 'react';
import { PlatformContext } from '../core/Platform.context';

export const useCrudDefinitions = (itemType: ItemType, nodeName?: string) => {
    const { crudDefinitions, pieMenuConfig } =
        useContext(PlatformContext).state;

    const definitions = crudDefinitions[itemType];
    const pieMenu = pieMenuConfig[itemType];

    const output = useMemo(
        () => ({
            ...definitions,
            nodeName: nodeName ?? definitions?.nodeName,
            pieMenu,
        }),
        [definitions, pieMenu]
    );

    if (!definitions) {
        throw new Error(`No crud definitions for item type ${itemType}`);
    }

    return output as ICrudDefinitions;
};
