import { useContext } from 'react';
import { PlatformContext } from '../core/Platform.context';

export const useCrudDefinitions = (itemType: ItemType) => {
    const { crudDefinitions } = useContext(PlatformContext).state;

    const definitions = crudDefinitions[itemType];

    if (!definitions) {
        throw new Error(`No crud definitions for item type ${itemType}`);
    }

    return definitions;
};
