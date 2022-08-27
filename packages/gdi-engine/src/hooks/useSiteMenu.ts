import { useEffect, useState } from 'react';
import { flattenInstanceProps } from 'shared-base';

export function useSiteMenu(elements: IElement[]) {
    const [menuItems, setMenuItems] = useState<ITopMenuItem[]>([]);

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
            return element.block?.tags?.includes(tag);
        })
        .map((element) => {
            return flattenInstanceProps(element.instanceProps);
        });
};
