import { id } from '../MyPortfolio';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', order: 0 },
            description: { fieldType: 'longText', isRequired: true, order: 1 },
        },
        colors: {},
        extra: {
            portfolioDatasetId: { fieldType: 'dataset', order: 2 },
        },
    },
};
