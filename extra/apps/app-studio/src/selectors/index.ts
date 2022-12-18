import { studio } from '@gdi/store-studio';
import { dashboard } from '@gdi/store-dashboard';

export const selectors = {
    raw: {
        ...dashboard.selectors.raw,
        ...studio.selectors.raw,
    },
    base: {
        ...dashboard.selectors.base,
        ...studio.selectors.base,
    },
    tables: {
        ...dashboard.selectors.tables,
    },
    options: {
        ...dashboard.selectors.options,
        ...studio.selectors.options,
    },
};
