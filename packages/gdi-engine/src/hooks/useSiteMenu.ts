import { useContext, useEffect, useState } from 'react';
import { IBlocks } from '@gdi/web-ui';
import { EngineContext } from '../context/Engine.context';
import { IElement } from '@gdi/store-mixer';
import { IMenuItem } from '../types';
import { set } from 'lodash';

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

const flattenInstanceProps = (instanceProps: Json = {}) => {
    const output: Json = {};

    const { strings = {}, colors = {}, extra = {} } = instanceProps;

    Object.keys(strings).forEach((key) => {
        output[`strings_${key}`] = strings[key];
    });

    Object.keys(colors).forEach((key) => {
        output[`colors_${key}`] = colors[key];
    });

    Object.keys(extra).forEach((key) => {
        output[`extra_${key}`] = extra[key];
    });

    return output;
};

const unflattenInstanceProps = (flattenInstanceProps: Json = {}) => {
    const output: Json = {
        strings: {},
        colors: {},
        extra: {},
    };

    Object.keys(flattenInstanceProps).forEach((key) => {
        const xPath = key.split('_').join('.');
        set(output, xPath, flattenInstanceProps[key]);
    });

    return output;
};
