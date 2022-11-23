import { id } from '../PageTemplate';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            templatesDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 0,
            },
            contentUrl: { fieldType: 'url', isRequired: true, order: 1 },
        },
    },
};
