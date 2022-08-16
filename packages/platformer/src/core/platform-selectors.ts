import { get, isBoolean, isNumber, isString } from 'lodash';
import { PlatformContext } from './platform-context';
import { useMemo, useContext } from 'react';
import { useSelector, useStore } from 'react-redux';
import { ISelectorsByApp } from '../store-builder/builders/SelectorsBuilder';

type StructureType = 'form' | 'detail' | 'table' | 'filter';

const $rawStructures = (state: any) => state.structures;

export function useStructure(
    structureType: StructureType,
    structureId: string
) {
    const store = useStore();
    const { selectors } = useContext(PlatformContext);
    const structures = useSelector($rawStructures);

    return useMemo(() => {
        const structureRaw = get(
            structures,
            `${structureType}s.${structureId}`
        );

        const selectorsDictionary = flatSelectors(selectors);

        const structure = resolveSelectorsInStructure(
            structureRaw,
            selectorsDictionary,
            store
        );

        return structure;
    }, [structureType, structureId]);
}

// ============== HELPERS ==============
type ValueType = 'selector' | 'object' | 'arrayOfItems' | 'other';
type Selector = any;

const flatSelectors = (
    selectors: ISelectorsByApp
): Record<string, Selector> => {
    const output: Record<string, Selector> = {};

    Object.keys(selectors).forEach((appId) => {
        Object.keys(selectors[appId]).forEach((categoryId) => {
            Object.keys(selectors[appId][categoryId]).forEach((selectorId) => {
                output[selectorId] = selectors[appId][categoryId][selectorId];
            });
        });
    });

    return output;
};

const isPrimitive = (value: any) => {
    return isBoolean(value) || isNumber(value) || isString(value);
};

const identifyValue = (value: any): ValueType => {
    if (Array.isArray(value)) {
        if (isPrimitive(value[0])) {
            return 'other';
        } else {
            return 'arrayOfItems';
        }
    }

    if (value && typeof value === 'object') {
        return 'object';
    }

    if (typeof value === 'string' && value.startsWith('$')) {
        return 'selector';
    }

    return 'other';
};

export const resolveSelectorsInStructure = (
    json: Json,
    map: Json,
    store: any
) => {
    return Object.keys(json).reduce((output, key) => {
        const value = json[key];
        output[key] = value;

        switch (identifyValue(value)) {
            case 'object':
                output[key] = resolveSelectorsInStructure(value, map, store);
                break;
            case 'arrayOfItems':
                output[key] = value.map((item: any) =>
                    resolveSelectorsInStructure(item, map, store)
                );
                break;
            case 'selector':
                const selector = map[value];
                const resolved = selector(store);

                output[key.replace('Selector', '')] = resolved;
                break;
        }

        return output;
    }, {} as any);
};
