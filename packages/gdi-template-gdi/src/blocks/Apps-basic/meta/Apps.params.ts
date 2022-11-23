import { id } from '../Apps';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            appsDatasetId: { fieldType: 'dataset', isRequired: true, order: 0 },
        },
    },
};
