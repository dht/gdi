import { id } from '../PageApp';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            appsDatasetId: {
                fieldType: 'dataset',
                isRequired: true,
                order: 0,
            },
            contentUrl: { fieldType: 'url', isRequired: true, order: 1 },
        },
    },
};
