import { id } from '../Quotes';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {},
        colors: {},
        extra: {
            quotesDatasetId: { fieldType: 'dataset', order: 0 },
        },
    },
};
