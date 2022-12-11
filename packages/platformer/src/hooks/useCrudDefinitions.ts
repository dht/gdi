import { useContext, useMemo } from 'react';
import { PlatformContext } from '../core/Platform.context';
import { useTranslation } from '@gdi/language';

export const useCrudDefinitions = (itemType: ItemType, nodeName?: string) => {
    const { crudDefinitions, pieMenuConfig } =
        useContext(PlatformContext).state;

    const definitions = crudDefinitions[itemType];
    const pieMenu = pieMenuConfig[itemType];
    const { td } = useTranslation();

    const output = useMemo(() => {
        const output = {
            ...definitions,
            nodeName: nodeName ?? definitions?.nodeName,
            pieMenu,
        };

        return td(output as ICrudDefinitions) as ICrudDefinitions;
    }, [definitions, pieMenu]);

    if (!definitions) {
        throw new Error(`No crud definitions for item type ${itemType}`);
    }

    return output as ICrudDefinitions;
};
