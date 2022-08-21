import { useContext, useEffect, useState } from 'react';
import { EngineContext } from '../context/Engine.context';
import { IElement } from '@gdi/store-mixer';
import { IMenuItem } from '../types';
import { flattenInstanceProps } from '../utils/data';

export function useSiteMenu(elements: IElement[]) {
    const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);

    useEffect(() => {
        const headerElements = findBlockPropsByTag(
            elements,
            'type-sectionHeader'
        );

        const items = headerElements.map((item) => {
            const { extra_id, strings_text } = item;

            return {
                href: '#' + extra_id,
                title: strings_text,
            };
        });

        setMenuItems(items);
    }, [elements]);

    return menuItems;
}

const findBlockPropsByTag = (elements: IElement[], tag: string) => {
    return elements
        .filter((element) => {
            return element.widget?.tags?.includes(tag);
        })
        .map((element) => {
            return flattenInstanceProps(element.instanceProps);
        });
};
