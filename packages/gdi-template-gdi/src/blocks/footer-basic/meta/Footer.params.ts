import { id } from '../Footer';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            text: { fieldType: 'text', order: 0 },
        },
        colors: {},
        extra: {
            linksDatasetId: { fieldType: 'dataset', order: 0 },
        },
    },
};
