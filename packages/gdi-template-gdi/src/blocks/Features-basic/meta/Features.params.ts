import { id } from '../Features';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
            version: { fieldType: 'text', order: 2 },
        },
        colors: {},
        extra: {
            featuresDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 0,
            },
        },
    },
};
