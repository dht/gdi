import * as base from './selectors.base';
import { createSelector } from 'reselect';
import { IMixerStore } from './types';
import { sortBy } from 'shared-base';
import { upperFirst } from 'lodash';
import { flattenInstanceProps } from 'shared-base';

export const $i = (state: { mixer: IMixerStore }) => state.mixer;

export const $contentFormConfig = createSelector(
    base.$instanceContent,
    (instance): IFormConfig | undefined => {
        if (!instance) {
            return;
        }

        const { id, widget } = instance;

        if (!widget || !widget.params) {
            return;
        }

        const { schema } = widget.params;

        const fields: IFormField[] = [];

        function addFields(definitions: IWidgetSchemaGroup, groupId: string) {
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
    base.$instanceContent,
    (instance): Json => {
        if (!instance) {
            return {};
        }

        const { instanceProps } = instance;

        return flattenInstanceProps(instanceProps);
    }
);

export const $contentFormOptions = createSelector(
    base.$instanceContent,
    (instances): Json => {
        return {};
    }
);

export const $contentFormConfigSelected = createSelector(
    base.$instanceSelected,
    (instance): IFormConfig | undefined => {
        if (!instance) {
            return;
        }

        const { id, widget } = instance;

        if (!widget || !widget.params) {
            return;
        }

        const { schema } = widget.params;

        const fields: IFormField[] = [];

        function addFields(definitions: IWidgetSchemaGroup, groupId: string) {
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

export const $contentFormDataSelected = createSelector(
    base.$instanceSelected,
    (instance): Json => {
        if (!instance) {
            return {};
        }

        const { instanceProps } = instance;

        return flattenInstanceProps(instanceProps);
    }
);

export const $contentFormOptionsSelected = createSelector(
    base.$instanceSelected,
    (instances): Json => {
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
    json: 'text',
};
