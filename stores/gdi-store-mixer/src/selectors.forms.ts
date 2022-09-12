import * as base from './selectors.base';
import { createSelector } from 'reselect';
import { IMixerStore } from './types';
import { sortBy } from 'shared-base';
import { upperFirst } from 'lodash';
import { flattenInstanceProps } from 'shared-base';

export const $i = (state: IMixerStore) => state;

export const $contentFormConfig = createSelector(
    base.$elementContent,
    (element): IFormConfig | null => {
        if (!element) {
            return null;
        }

        const { id, block } = element;
        const { schema } = block.params;

        const fields: IFormField[] = [];

        function addFields(definitions: IBlockSchemaGroup, groupId: string) {
            const toAdd: IFormField[] = [];

            Object.keys(definitions).forEach((fieldId) => {
                const fieldParams = definitions[fieldId];
                const { fieldType, order, isRequired } = fieldParams;

                toAdd.push({
                    id: `${groupId}_${fieldId}`,
                    label: upperFirst(fieldId),
                    fieldType: mapTypeToType[fieldType],
                    placeholder: upperFirst(fieldId),
                    groupId,
                    order,
                    isRequired,
                });
            });

            toAdd.sort(sortBy('order'));
            fields.push(...toAdd);
        }

        addFields(schema.strings, 'strings');
        addFields(schema.extra, 'extra');
        addFields(schema.colors, 'colors');

        return {
            id,
            sequence: 1,
            layout: {
                flavour: 'threeColumns',
                width: 880,
                flex: [2, 2, 1],
                labelSize: 'compact',
            },
            groups: [
                {
                    id: 'strings',
                    layoutColumnIndex: 0,
                },
                {
                    id: 'extra',
                    layoutColumnIndex: 1,
                },
                {
                    id: 'colors',
                    layoutColumnIndex: 2,
                },
            ],
            fields,
            submit: {
                title: 'Save & close',
            },
        };
    }
);

export const $contentFormData = createSelector(
    base.$elementContent,
    (element): Json => {
        if (!element) {
            return {};
        }

        const { instanceProps } = element;

        return flattenInstanceProps(instanceProps);
    }
);

export const $contentFormOptions = createSelector(
    base.$elementContent,
    (elements): Json => {
        return {};
    }
);

const mapTypeToType: Record<SchemaFieldType, FieldType> = {
    number: 'number',
    text: 'text',
    longText: 'paragraph',
    url: 'url',
    checkbox: 'checkbox',
    image: 'imageUpload',
    color: 'color',
};
